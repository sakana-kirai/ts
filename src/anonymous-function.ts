export {};

let bmi: (height: number, weight: number) => number = function (
  height,
  weight
) {
  return weight / (height * height);
};

console.log(bmi(1.78, 86));
