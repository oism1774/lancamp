// Pixel data for the campfire scene, traced from design/design-reference-desktop.html.
// All coordinates are in the scene's 2400 x 440 viewBox; the fire sits at x = 1200.

export const VIEW_W = 2400;
export const VIEW_H = 440;
export const GROUND_Y = 256;
export const FIRE_X = 1200;

export const COLORS = {
  hills: '#1b1840',
  pines: '#110f26',
  ground: '#0c0a18',
  glow: '#ff8a3d',
};

/** Hill skyline, left to right: [top y, number of 4-unit columns]. */
export const HILLS: [number, number][] = [
  [106, 3], [110, 7], [114, 6], [118, 6], [122, 7], [126, 9], [130, 27], [126, 16], [130, 10],
  [134, 6], [138, 5], [142, 3], [146, 4], [150, 4], [154, 3], [158, 3], [162, 4], [166, 3],
  [170, 9], [174, 6], [178, 21], [174, 7], [170, 9], [166, 5], [162, 5], [158, 5], [154, 6],
  [150, 9], [146, 45], [142, 7], [138, 5], [134, 5], [130, 4], [126, 4], [122, 4], [118, 4],
  [114, 4], [110, 4], [106, 6], [102, 25], [106, 5], [110, 5], [114, 4], [118, 4], [122, 3],
  [126, 4], [130, 4], [134, 5], [138, 5], [142, 7], [146, 44], [150, 10], [154, 7], [158, 5],
  [162, 4], [166, 5], [170, 10], [174, 7], [178, 20], [174, 6], [170, 9], [166, 3], [162, 4],
  [158, 3], [154, 4], [150, 3], [146, 4], [142, 4], [138, 4], [134, 5], [130, 9], [126, 23],
  [130, 21], [126, 11], [122, 4],
];

/**
 * Width of each 4-unit pine row, from the tip down. A tree uses as many rows
 * as fit between its top and the ground; a seeded jitter widens some rows by 8.
 */
export const PINE_PROFILE = [
  4, 4, 4, 12, 12, 20, 28, 20, 28, 28, 28, 36, 44, 44, 44, 44, 52, 52, 52, 68, 68, 60, 68, 68, 76,
  76, 84, 92, 84, 92, 92, 92, 100, 108, 108, 108, 108, 116, 116, 116, 132, 132, 124, 132, 132,
  140, 140, 148, 156, 148,
];
export const PINE_JITTER = 0.31;

/** Pines: [center x, top y]. Every tree stands on the ground line. */
export const PINES: [number, number][] = [
  [-8, 96], [32, 64], [88, 128], [135, 84], [175, 120], [228, 164], [278, 88], [325, 80],
  [390, 128], [444, 160], [490, 120], [553, 92], [607, 112], [658, 80], [708, 88], [743, 64],
  [810, 100], [858, 88], [917, 152], [978, 164], [1042, 144], [1079, 156], [1127, 60],
  [1196, 172], [1254, 76], [1299, 68], [1354, 116], [1422, 96], [1478, 76], [1539, 156],
  [1589, 68], [1637, 60], [1667, 112], [1722, 120], [1763, 72], [1832, 144], [1866, 92],
  [1936, 140], [1992, 80], [2038, 132], [2081, 104], [2117, 120], [2151, 116], [2210, 136],
  [2268, 140], [2319, 168], [2378, 132],
];

/** Banded light pool around the fire: [rx, ry, opacity], outermost first. */
export const GLOW: [number, number, number][] = [
  [420, 120, 0.07],
  [300, 86, 0.14],
  [190, 56, 0.26],
];
export const GLOW_CY = 370;

/** Shared palette for every sprite below. '.' is transparent. */
export const PALETTE: Record<string, string> = {
  a: '#17132b', // shadowed hair / face
  b: '#ff9a52', // firelit skin
  c: '#3b2d6b', // violet jacket / hood
  d: '#d9733d', // firelit cloth edge
  e: '#120f22', // legs
  f: '#e07a44', // firelit hood edge
  g: '#2c3a5e', // blue jacket
  h: '#5a2a4a', // plum jacket
  i: '#4a2a5e', // purple hood
  j: '#2f4a3a', // green jacket
  k: '#b8361b', // flame outline
  l: '#f2761c', // flame
  m: '#fbbf24', // flame core
  n: '#fff1c1', // flame heart
  o: '#5b3a24', // firewood
  p: '#2a1f1a', // charcoal
  q: '#6b6560', // stone
  r: '#9a928a', // lit stone
  s: '#4a2c1c', // log bark
  t: '#6b4226', // log top
  u: '#c9925a', // log end grain
};

export interface Sprite {
  x: number;
  y: number;
  cell: number;
  rows: string[];
}

/** Logs the crew sits on (cell 8). */
const LOG = ['u' + 't'.repeat(17) + 'u', 'u' + 's'.repeat(17) + 'u'];
export const LOGS: Sprite[] = [
  { x: 938, y: 356, cell: 8, rows: LOG },
  { x: 1310, y: 356, cell: 8, rows: LOG },
];

/** The four people, facing the fire (cell 8). */
export const PEOPLE: Sprite[] = [
  {
    x: 946, y: 268, cell: 8,
    rows: ['..aaa..', '.aaaaa.', '.aaaab.', '.aaaab.', '..aab..', '.ccccd.', 'ccccccd', 'cccccdd', 'ccccccd', 'eeeeeee', '.....ee', '.....ee'],
  },
  {
    x: 1026, y: 268, cell: 8,
    rows: ['.ccccc.', 'ccccccc', 'ccaaaff', 'ccaaaaf', '.caaaf.', '.ggggd.', 'ggggggd', 'gggggdd', 'ggggggd', 'eeeeeee', '.....ee', '.....ee'],
  },
  {
    x: 1318, y: 268, cell: 8,
    rows: ['..aaa..', '.aaaaa.', '.baaaa.', '.baaaa.', '..baa..', '.dhhhh.', 'dhhhhhh', 'ddhhhhh', 'dhhhhhh', 'eeeeeee', 'ee.....', 'ee.....'],
  },
  {
    x: 1398, y: 268, cell: 8,
    rows: ['.iiiii.', 'iiiiiii', 'ffaaaii', 'faaaaii', '.faaai.', '.djjjj.', 'djjjjjj', 'ddjjjjj', 'djjjjjj', 'eeeeeee', 'ee.....', 'ee.....'],
  },
];

/** Two flame frames that alternate every 0.25s (cell 10). */
export const FIRE_FRAMES: Sprite[] = [
  {
    x: 1140, y: 250, cell: 10,
    rows: ['....k.......', '....kk......', '....klk.....', '...kllk...k.', '...klmlk..kk', 'k.klmmlk.klk', 'kkklmmmlkklk', '.klmmnmmllk.', 'klmmnnnmmlk.', '.klmnnnmlk..', '..klnnnlk...', '..kmmmmk....', '....lll.....'],
  },
  {
    x: 1140, y: 250, cell: 10,
    rows: ['.......k....', '......kk....', '.....klk....', '.k...kllk...', 'kk..klmlk...', 'klk.klmmlk.k', 'klkklmmmlkkk', '.kllmmnmmlk.', '.klmmnnnmmlk', '..klmnnnmlk.', '...klnnnlk..', '....kmmmmk..', '.....lll....'],
  },
];

/** Crossed firewood and the stone ring (cell 10). */
export const FIRE_BASE: Sprite = {
  x: 1130, y: 340, cell: 10,
  rows: ['.o.........o..', '..o.......o...', '...o.....o....', '..poo...oop...', '.qqppppppppqq.', 'rqqqqqqqqqqqqr'],
};
