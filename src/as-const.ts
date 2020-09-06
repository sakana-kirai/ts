export {};

let name = 'Atsushi';
name = 'Ham';

let nickname = 'Ham' as const;
nickname = 'Ham';

// すべての要素がreadonlyになる
let profile = {
  name: 'atsushi',
  height: 178,
} as const;

// profile.name = 'ham';
// profile.height = 180;
