export {};

// シグネチャー
function double(value: number): number;
function double(value: string): string;

// シグネチャーで型宣言してるため、any型でOK
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    // string型を指定しなくてもOK
    return value + value;
  }
}

console.log(double(22));
console.log(double('go '));
// console.log(double(true));  errorで実行できない
