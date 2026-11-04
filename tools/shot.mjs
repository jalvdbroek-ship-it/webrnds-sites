// Screenshot van de site met Playwright (uit de sidecar van deze omgeving).
//   node tools/shot.mjs [url] [map]
import { loadPlaywright } from "./browser.mjs";

const url = process.argv[2] || "http://localhost:4321/";
const map = process.argv[3] || "shots";

const { chromium } = await loadPlaywright();
const browser = await chromium.launch();

for (const [name, width, height] of [
  ["desktop", 1440, 900],
  ["mobiel", 390, 844]
]) {
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  page.on("console", (m) => {
    if (m.type() === "error" && !m.text().includes("404")) errors.push(m.text());
  });
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(url, { waitUntil: "networkidle" });

  // Door de pagina scrollen, zodat alle reveal-animaties zijn afgelopen.
  await page.evaluate(async () => {
    const vorige = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    const stap = Math.round(window.innerHeight * 0.6);
    for (let y = 0; y < document.body.scrollHeight; y += stap) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 150));
    }
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = vorige;
  });
  await page.waitForTimeout(1200);

  const hoogte = await page.evaluate(() => document.body.scrollHeight);
  await page.screenshot({ path: `${map}/${name}-boven.png` });
  await page.screenshot({ path: `${map}/${name}-volledig.png`, fullPage: true });
  console.log(`${name}: hoogte ${hoogte}px, ${errors.length ? errors.join(" | ") : "geen fouten"}`);
  await page.close();
}

await browser.close();
