export {};

class Person {
  // public name: string;    publicは省略
  name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    // ageはprivateのためエラー
    // return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('taro', 18, 'japan');
let hanako = new Android('hanako', 10, 'japan');

console.log(taro.name);
// console.log(taro.nationality);
console.log(taro.profile());
console.log(hanako.profile());
// console.log(taro.age);
// let hanako = new Person();
