// WCAG 2.2 contrast check voor het palet van WeBrnds. Run: node tools/contrast.mjs
const clamp01 = (v) => Math.min(1, Math.max(0, v));

function oklchToSrgb(L, C, H) {
  const h = (H * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;
  const rgb = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574013 * m - 0.3413193965 * s,
    -0.0041960863 * l + 0.7034186147 * m + 1.707614701 * s,
  ];
  return rgb.map((v) => clamp01(v));
}

const toSrgb = (c) => (c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055);
const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);

function oklchToHex(L, C, H) {
  return (
    "#" +
    oklchToSrgb(L, C, H)
      .map((v) => Math.round(toSrgb(v) * 255).toString(16).padStart(2, "0"))
      .join("")
  );
}

const luminance = (rgb) =>
  0.2126 * toLinear(rgb[0]) + 0.7152 * toLinear(rgb[1]) + 0.0722 * toLinear(rgb[2]);

const ratio = (a, b) => {
  const la = luminance(a);
  const lb = luminance(b);
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
};

// Het palet van assets/css/site.css, als hex.
const T = {
  paper: "#ffffff",
  paper2: "#f7f9fc",
  ink: "#14365c",
  ink2: "#456185",
  line: "#e3e8f0",

  blauw: "#38b8f8",
  blauwTint: "#e6f6ff",
  cyaan: "#28d8e8",
  cyaanTint: "#e2fbff",
  groen: "#48d888",
  groenTint: "#e6fbf0",
  geel: "#f8b828",
  geelTint: "#fff6e0",
  oranje: "#f89838",
  oranjeTint: "#fff2e4",
  koraal: "#f88868",
  koraalTint: "#fff0ea",
  rood: "#f87888",
  roodTint: "#ffedef",
  roze: "#e878b8",
  rozeTint: "#fdeef7",
  lila: "#c888f8",
  lilaTint: "#f6edff",
  violet: "#5646cf",
  violetTint: "#eeecff",
  periwinkle: "#8888f8",
  periwinkleTint: "#eeeefe",
  teal: "#2c9da4",
  tealDonker: "#136e7a",
  footerTekst: "#dbe6f3",
  footerZacht: "#b6c8dc",
  geel: "#f8b828",
};

const px = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);

const pairs = [
  // anker
  ["ink op paper", "ink", "paper", 4.5],
  ["ink op paper2", "ink", "paper2", 4.5],
  ["ink2 op paper", "ink2", "paper", 4.5],
  ["ink2 op paper2", "ink2", "paper2", 4.5],
  ["ink op elke tint", "ink", "blauwTint", 4.5],
  ["ink2 op elke tint", "ink2", "geelTint", 4.5],
  ["footertekst op ink", "footerTekst", "ink", 4.5],
  ["footerzacht op ink", "footerZacht", "ink", 4.5],

  // de kleurvlakken: de donkerblauwe tekst erop
  ["ink op blauw", "ink", "blauw", 4.5],
  ["ink op cyaan", "ink", "cyaan", 4.5],
  ["ink op groen", "ink", "groen", 4.5],
  ["ink op geel", "ink", "geel", 4.5],
  ["ink op oranje", "ink", "oranje", 4.5],
  ["ink op koraal", "ink", "koraal", 4.5],
  ["ink op rood", "ink", "rood", 4.5],
  ["ink op roze", "ink", "roze", 4.5],
  ["ink op lila", "ink", "lila", 4.5],
  ["wit op violet", "paper", "violet", 4.5],

  // het woordmerk
  ["teal op paper", "teal", "paper", 3],
  ["tealDonker op paper", "tealDonker", "paper", 4.5],

  // randen en focus
  ["ink op paper (focus)", "ink", "paper", 3],
  ["rood-donker foutstatus", "tealDonker", "roodTint", 4.5],
];

let fails = 0;
for (const [label, a, b, min] of pairs) {
  const r = ratio(px(T[a]), px(T[b]));
  const pass = r >= min;
  if (!pass) fails++;
  console.log(
    `${pass ? "PASS" : "FAIL"}  ${r.toFixed(2).padStart(6)} (min ${min})  ${label}`
  );
}

console.log(fails ? `\n${fails} failing pair(s)` : "\nAll pairs pass");
process.exit(fails ? 1 : 0);
