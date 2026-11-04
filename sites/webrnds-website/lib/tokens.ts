/**
 * WEBRNDS design tokens. Single source of truth for the website, the huisstijl
 * page and the exported brand files in /public/brand.
 */

export type TokenKey =
  | "paper"
  | "surface"
  | "ink"
  | "inkMuted"
  | "onSignal"
  | "onAccent"
  | "line"
  | "lineStrong"
  | "signaal"
  | "signaalStrong"
  | "zuurstof";

export const lightTokens: Record<TokenKey, string> = {
  paper: "oklch(0.982 0.005 250)",
  surface: "oklch(1 0 0)",
  ink: "oklch(0.24 0.028 255)",
  inkMuted: "oklch(0.5 0.022 255)",
  onSignal: "oklch(1 0 0)",
  onAccent: "oklch(0.24 0.028 255)",
  line: "oklch(0.9 0.008 252)",
  lineStrong: "oklch(0.6 0.014 252)",
  signaal: "oklch(0.47 0.15 253)",
  signaalStrong: "oklch(0.39 0.135 254)",
  zuurstof: "oklch(0.88 0.19 103)",
};

export const darkTokens: Record<TokenKey, string> = {
  paper: "oklch(0.185 0.018 256)",
  surface: "oklch(0.235 0.02 256)",
  ink: "oklch(0.955 0.006 250)",
  inkMuted: "oklch(0.78 0.016 250)",
  onSignal: "oklch(0.185 0.018 256)",
  onAccent: "oklch(0.185 0.018 256)",
  line: "oklch(0.33 0.02 254)",
  lineStrong: "oklch(0.52 0.024 254)",
  signaal: "oklch(0.75 0.13 253)",
  signaalStrong: "oklch(0.83 0.11 253)",
  zuurstof: "oklch(0.88 0.19 103)",
};

export const tokenMeta: {
  key: TokenKey;
  name: string;
  role: string;
  usage: string;
}[] = [
  {
    key: "paper",
    name: "Papier",
    role: "Achtergrond van de pagina",
    usage: "Gebruik dit voor het grootste deel van het scherm. Maximaal 80 procent.",
  },
  {
    key: "surface",
    name: "Wit",
    role: "Kaart, paneel of invoerveld",
    usage: "Eén laag boven papier. Nooit twee keer stapelen.",
  },
  {
    key: "ink",
    name: "Inkt",
    role: "Tekst en het beeldmerk",
    usage: "Hoofdtekst, body en het beeldmerk. Altijd op papier of wit.",
  },
  {
    key: "inkMuted",
    name: "Inkt gedempt",
    role: "Secondaire tekst",
    usage: "Metadata, bijschriften en hulpinformatie. Leesbaar op 4,5:1 of beter.",
  },
  {
    key: "onSignal",
    name: "Tekst op Signaal",
    role: "Tekst op een Signaal-vlak",
    usage: "Wit op Signaal in de lichte modus, inkt op Signaal in de donkere modus.",
  },
  {
    key: "onAccent",
    name: "Tekst op Zuurstof",
    role: "Tekst op het accentvlak",
    usage: "Inkt op Zuurstof, in beide modi. Nooit wit op Zuurstof.",
  },
  {
    key: "line",
    name: "Lijn",
    role: "Scheiding",
    usage: "Haarlijnen tussen secties en randen van vlakke vormen.",
  },
  {
    key: "lineStrong",
    name: "Lijn sterk",
    role: "Rand van een besturingselement",
    usage: "Invoervelden en selecties. Minimaal 3:1 tegen de achtergrond.",
  },
  {
    key: "signaal",
    name: "Signaal",
    role: "Primaire kleur",
    usage:
      "Knoppen, acties en het accent van de site. Nooit als achtergrond van grote vlakken met tekst erin, behalve met witte tekst.",
  },
  {
    key: "signaalStrong",
    name: "Signaal diep",
    role: "Hover en actieve staat",
    usage: "Gebruik dit als de hoverkleur van Signaal, niet als extra kleur.",
  },
  {
    key: "zuurstof",
    name: "Zuurstof",
    role: "Haccent",
    usage: "Eén accent per scherm. Met inkt-tekst erop. Nooit voor lange tekst.",
  },
];

/** Contrast pairs that must hold, with the WCAG threshold per pair. */
export const contrastPairs: {
  theme: "light" | "dark";
  fg: TokenKey;
  bg: TokenKey;
  min: number;
  label: string;
}[] = [
  { theme: "light", fg: "ink", bg: "paper", min: 4.5, label: "Hoofdtekst op papier" },
  { theme: "light", fg: "ink", bg: "surface", min: 4.5, label: "Hoofdtekst op wit" },
  { theme: "light", fg: "inkMuted", bg: "paper", min: 4.5, label: "Gedempte tekst op papier" },
  { theme: "light", fg: "inkMuted", bg: "surface", min: 4.5, label: "Gedempte tekst op wit" },
  { theme: "light", fg: "signaal", bg: "paper", min: 4.5, label: "Signaal-tekst op papier" },
  { theme: "light", fg: "onSignal", bg: "signaal", min: 4.5, label: "Knoptekst op Signaal" },
  { theme: "light", fg: "onAccent", bg: "zuurstof", min: 4.5, label: "Tekst op Zuurstof" },
  { theme: "light", fg: "signaal", bg: "zuurstof", min: 4.5, label: "Signaal op Zuurstof" },
  {
    theme: "light",
    fg: "lineStrong",
    bg: "paper",
    min: 3,
    label: "Rand van invoerveld op papier",
  },
  { theme: "dark", fg: "ink", bg: "paper", min: 4.5, label: "Hoofdtekst op papier (donker)" },
  { theme: "dark", fg: "ink", bg: "surface", min: 4.5, label: "Hoofdtekst op paneel (donker)" },
  {
    theme: "dark",
    fg: "inkMuted",
    bg: "paper",
    min: 4.5,
    label: "Gedempte tekst op papier (donker)",
  },
  {
    theme: "dark",
    fg: "inkMuted",
    bg: "surface",
    min: 4.5,
    label: "Gedempte tekst op paneel (donker)",
  },
  {
    theme: "dark",
    fg: "signaal",
    bg: "paper",
    min: 4.5,
    label: "Signaal-tekst op papier (donker)",
  },
  {
    theme: "dark",
    fg: "onSignal",
    bg: "signaal",
    min: 4.5,
    label: "Knoptekst op Signaal (donker)",
  },
  {
    theme: "dark",
    fg: "onAccent",
    bg: "zuurstof",
    min: 4.5,
    label: "Tekst op Zuurstof (donker)",
  },
  {
    theme: "dark",
    fg: "lineStrong",
    bg: "paper",
    min: 3,
    label: "Rand van invoerveld (donker)",
  },
];

export const typeScale = [
  { token: "display-xl", size: "clamp(2.75rem, 6vw, 4.5rem)", use: "H1 op de homepage" },
  { token: "display", size: "clamp(2rem, 4vw, 3rem)", use: "H1 op binnenpagina's" },
  { token: "title", size: "clamp(1.5rem, 2.5vw, 2rem)", use: "H2 per sectie" },
  { token: "lead", size: "clamp(1.125rem, 1.6vw, 1.375rem)", use: "Introductie" },
  { token: "body", size: "1.0625rem", use: "Bodytekst" },
  { token: "small", size: "0.9375rem", use: "Bijschrift en tabeltekst" },
];

export const motionDurations = [
  { token: "snel", value: "120ms", use: "Hover, focus en knopfeedback" },
  { token: "basis", value: "180ms", use: "Kleur, rand en achtergrond" },
  { token: "opening", value: "240ms", use: "Menu's en panelen" },
];
