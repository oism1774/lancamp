import type { Sprite } from '../data/scene';

/** One rectangle as an SVG path segment. */
export const rectPath = (x: number, y: number, w: number, h: number) =>
  `M${x} ${y}h${w}v${h}h${-w}z`;

/**
 * Turn a character-map sprite into one path per colour key.
 * Horizontal runs of the same key become a single rectangle, so a sprite
 * renders as a handful of <path>s instead of hundreds of <rect>s.
 */
export function spritePaths(sprite: Sprite): Map<string, string> {
  const out = new Map<string, string>();
  const { x, y, cell, rows } = sprite;
  rows.forEach((row, r) => {
    let c = 0;
    while (c < row.length) {
      const key = row[c];
      let end = c + 1;
      while (end < row.length && row[end] === key) end++;
      if (key !== '.') {
        const d = rectPath(x + c * cell, y + r * cell, (end - c) * cell, cell);
        out.set(key, (out.get(key) ?? '') + d);
      }
      c = end;
    }
  });
  return out;
}

/** Small deterministic PRNG (mulberry32) so the pines look the same on every build. */
export function seeded(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
