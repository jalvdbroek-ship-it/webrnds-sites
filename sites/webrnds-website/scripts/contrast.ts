/**
 * Contrast audit for the WEBRNDS palette.
 * Run: npm run contrast
 * Every pair is measured from the resolved sRGB values, not estimated.
 */
import { contrastRatio, oklchToHex } from "../lib/color.ts";
import { contrastPairs, darkTokens, lightTokens } from "../lib/tokens.ts";

const themes = { light: lightTokens, dark: darkTokens };

let failures = 0;
const rows: string[] = [];

for (const pair of contrastPairs) {
  const tokens = themes[pair.theme];
  const fg = tokens[pair.fg];
  const bg = tokens[pair.bg];
  const ratio = contrastRatio(fg, bg);
  const pass = ratio >= pair.min;
  if (!pass) failures += 1;
  rows.push(
    [
      pass ? "PASS" : "FAIL",
      pair.theme.padEnd(5),
      `${pair.fg} op ${pair.bg}`.padEnd(22),
      `${ratio.toFixed(2)}:1`.padStart(7),
      `min ${pair.min}:1`,
      pair.label,
    ].join("  "),
  );
}

console.log("WEBRNDS contrast audit\n");
console.log(rows.join("\n"));

console.log("\nHexwaarden\n");
for (const theme of ["light", "dark"] as const) {
  console.log(`${theme}:`);
  for (const [key, value] of Object.entries(themes[theme])) {
    console.log(`  ${key.padEnd(14)} ${value.padEnd(24)} ${oklchToHex(value)}`);
  }
}

console.log(
  failures === 0
    ? "\nAlle contrastparen halen de WCAG 2.2 AA-norm."
    : `\n${failures} paar(en) halen de norm niet.`,
);
process.exit(failures === 0 ? 0 : 1);
