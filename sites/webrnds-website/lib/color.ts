/**
 * OKLCH -> sRGB and WCAG contrast maths.
 * Used by scripts/contrast.mjs (audit) and by the huisstijl page (swatches).
 */

export type Rgb = { r: number; g: number; b: number };

export function parseOklch(value: string): { l: number; c: number; h: number } {
  const match = value.match(/oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\)/i);
  if (!match) throw new Error(`Not an oklch() value: ${value}`);
  return { l: Number(match[1]), c: Number(match[2]), h: Number(match[3]) };
}

function oklabToLinearSrgb(l: number, a: number, b: number): Rgb {
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;
  const lc = l_ ** 3;
  const mc = m_ ** 3;
  const sc = s_ ** 3;
  return {
    r: 4.0767416621 * lc - 3.3077115913 * mc + 0.2309699292 * sc,
    g: -1.2684380046 * lc + 2.6097574011 * mc - 0.3413193965 * sc,
    b: -0.0041960863 * lc - 0.7034186147 * mc + 1.707614701 * sc,
  };
}

function inGamut({ r, g, b }: Rgb): boolean {
  const eps = 1e-4;
  return r >= -eps && r <= 1 + eps && g >= -eps && g <= 1 + eps && b >= -eps && b <= 1 + eps;
}

/** OKLCH -> linear sRGB, reducing chroma until the colour fits the sRGB gamut. */
export function oklchToLinearRgb(l: number, c: number, h: number): Rgb {
  const rad = (h * Math.PI) / 180;
  const direct = oklabToLinearSrgb(l, c * Math.cos(rad), c * Math.sin(rad));
  if (inGamut(direct)) return clamp(direct);

  let low = 0;
  let high = c;
  for (let i = 0; i < 24; i += 1) {
    const mid = (low + high) / 2;
    const candidate = oklabToLinearSrgb(l, mid * Math.cos(rad), mid * Math.sin(rad));
    if (inGamut(candidate)) low = mid;
    else high = mid;
  }
  return clamp(oklabToLinearSrgb(l, low * Math.cos(rad), low * Math.sin(rad)));
}

function clamp(rgb: Rgb): Rgb {
  return {
    r: Math.min(1, Math.max(0, rgb.r)),
    g: Math.min(1, Math.max(0, rgb.g)),
    b: Math.min(1, Math.max(0, rgb.b)),
  };
}

function encode(channel: number): number {
  return channel <= 0.0031308 ? channel * 12.92 : 1.055 * channel ** (1 / 2.4) - 0.055;
}

export function oklchToHex(value: string): string {
  const { l, c, h } = parseOklch(value);
  const rgb = oklchToLinearRgb(l, c, h);
  const hex = [rgb.r, rgb.g, rgb.b]
    .map((channel) =>
      Math.round(encode(channel) * 255)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("");
  return `#${hex}`;
}

/** WCAG 2.x relative luminance from linear sRGB. */
export function relativeLuminance(value: string): number {
  const { l, c, h } = parseOklch(value);
  const rgb = oklchToLinearRgb(l, c, h);
  return 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
}

/** WCAG 2.x contrast ratio between two colours, 1 to 21. */
export function contrastRatio(a: string, b: string): number {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  const lighter = Math.max(la, lb);
  const darker = Math.min(la, lb);
  return (lighter + 0.05) / (darker + 0.05);
}
