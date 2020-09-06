export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  Octobar,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// const MonthsJs = {
//   January: 0,
//   February: 1,
// };
// console.log(MonthsJs.February);

enum COLORS {
  RED = '#FF000',
  WHITE = '#FFFFFF',
  GREEN = '#008800',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}

COLORS.YELLOW;
