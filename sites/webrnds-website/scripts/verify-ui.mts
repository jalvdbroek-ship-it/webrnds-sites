/**
 * Gerichte controle van de gerenderde site.
 * Run: npm run verify:ui
 */
import { chromium } from "playwright";

const base = process.env.BASE_URL ?? "http://localhost:3000";
const pages = ["/", "/diensten", "/werk", "/huisstijl", "/contact"];

const browser = await chromium.launch();
const failures: string[] = [];
const notes: string[] = [];

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

// 1. Focus zichtbaar via het toetsenbord.
await page.goto(base, { waitUntil: "networkidle" });
await page.keyboard.press("Tab");
const firstFocus = await page.evaluate(() => {
  const el = document.activeElement;
  if (!el || el === document.body) return null;
  const style = getComputedStyle(el);
  return {
    tag: el.tagName,
    label: el.textContent?.trim().slice(0, 40),
    outlineWidth: style.outlineWidth,
    outlineStyle: style.outlineStyle,
    outlineColor: style.outlineColor,
  };
});
if (!firstFocus || firstFocus.outlineStyle === "none" || firstFocus.outlineWidth === "0px") {
  failures.push(
    `Focusindicator ontbreekt op het eerste tabelement: ${JSON.stringify(firstFocus)}`,
  );
} else {
  notes.push(
    `Focus zichtbaar: ${firstFocus.label} (${firstFocus.outlineWidth} ${firstFocus.outlineStyle})`,
  );
}

// 2. Geen dubbele focusring of focusring op de pointer.
await page.mouse.click(700, 400);
const pointerFocus = await page.evaluate(() => {
  const el = document.activeElement;
  if (!el || el === document.body) return null;
  const style = getComputedStyle(el);
  return { outlineStyle: style.outlineStyle, boxShadow: style.boxShadow };
});
notes.push(`Focus na pointerklik: ${JSON.stringify(pointerFocus)}`);

// 3. De FAQ gebruikt details en summary, bedienbaar met het toetsenbord.
await page.goto(`${base}/diensten`, { waitUntil: "networkidle" });
const summary = page.locator("summary").first();
await summary.focus();
await page.keyboard.press("Enter");
const faqOpen = await summary.evaluate((el) => (el.parentElement as HTMLDetailsElement).open);
if (!faqOpen) failures.push("FAQ geeft niet open na Enter op de summary.");
else notes.push("FAQ opent met Enter.");
const faqText = await page.evaluate(
  () => document.querySelector("details[open] p")?.textContent?.trim() ?? "",
);
notes.push(`FAQ antwoord zichtbaar: ${faqText.slice(0, 50)}`);

// 4. Reduce motion: de ring staat stil.
const reducedPage = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "reduce",
});
await reducedPage.goto(base, { waitUntil: "networkidle" });
await reducedPage.waitForTimeout(1800);
const arcOffset = await reducedPage
  .locator(".ring-arc")
  .evaluate((el) => getComputedStyle(el).strokeDashoffset);
if (arcOffset !== "0px") {
  failures.push(
    `Ring beweegt nog met prefers-reduced-motion (stroke-dashoffset ${arcOffset}).`,
  );
} else {
  notes.push("Ring staat stil met prefers-reduced-motion.");
}

// 5. Toegankelijke namen en em dashes in de zichtbare tekst.
/** Tekst uit het document, zonder de payload van Next.js. */
function visibleText(): string {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let out = "";
  let node = walker.nextNode();
  while (node) {
    const parent = node.parentElement;
    if (parent && parent.closest("script, style") === null) {
      out += `${node.textContent ?? ""}\n`;
    }
    node = walker.nextNode();
  }
  return out;
}

for (const path of pages) {
  await page.goto(`${base}${path}`, { waitUntil: "networkidle" });
  const body = await page.evaluate(visibleText);
  if (body.includes("—")) failures.push(`Em dash gevonden op ${path}.`);
  if (body.includes("–")) failures.push(`En dash gevonden op ${path}.`);

  const unlabelled = await page.evaluate(() => {
    const problems: string[] = [];
    for (const el of document.querySelectorAll("button, a")) {
      const text = el.textContent?.trim() ?? "";
      const label = el.getAttribute("aria-label") ?? "";
      if (!text && !label) problems.push(el.outerHTML.slice(0, 80));
    }
    return problems;
  });
  if (unlabelled.length > 0) {
    failures.push(`Elementen zonder naam op ${path}: ${unlabelled.join(" | ")}`);
  }
}

// 6. Geen emoji als interface-icoon.
const emojiRanges =
  "[\\u{1F000}-\\u{1FAFF}\\u{2600}-\\u{27BF}\\u{2B00}-\\u{2BFF}\\u{FE0F}\\u{1F1E6}-\\u{1F1FF}]";
for (const path of pages) {
  await page.goto(`${base}${path}`, { waitUntil: "networkidle" });
  const found = await page.evaluate((pattern) => {
    const re = new RegExp(pattern, "u");
    const hits: string[] = [];
    for (const el of document.querySelectorAll("body *")) {
      if (el.children.length > 0) continue;
      if (el.closest("script, style")) continue;
      if (el.textContent && re.test(el.textContent)) hits.push(el.textContent.slice(0, 30));
    }
    return hits;
  }, emojiRanges);
  if (found.length > 0) failures.push(`Emoji gevonden op ${path}: ${found.join(" | ")}`);
}

// 7. Content rail: dezelfde linker- en rechterrand op alle pagina's.
const rails: Record<string, number[]> = {};
for (const path of pages) {
  await page.goto(`${base}${path}`, { waitUntil: "networkidle" });
  rails[path] = await page.evaluate(() => {
    const rail = document.querySelector(".rail");
    if (!rail) return [];
    const box = rail.getBoundingClientRect();
    return [Math.round(box.left), Math.round(window.innerWidth - box.right)];
  });
}
const reference = JSON.stringify(rails["/"]);
for (const [path, edges] of Object.entries(rails)) {
  if (JSON.stringify(edges) !== reference) {
    failures.push(
      `Content rail wijkt af op ${path}: ${JSON.stringify(edges)} tegenover ${reference}`,
    );
  }
}
notes.push(`Content rail overal gelijk: ${reference}`);

await browser.close();

console.log(notes.map((note) => `OK   ${note}`).join("\n"));
if (failures.length > 0) {
  console.log(`\n${failures.map((failure) => `FAIL ${failure}`).join("\n")}`);
  process.exit(1);
}
console.log("\nAlle interactie- en inhoudscontroles geslaagd.");
