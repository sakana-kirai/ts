export {};

// * owner
//    * 所有者
//    * 初期化時に設定可能
//    * 編集不可
//    * 参照可能
// * secretNumber
//    * 個人番号
//    * 初期化時に設定可能
//    * 編集可能
//    * 参照不可

class MyNumberCard {
  constructor(private _owner: string, private _secretNumber: number) {}

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はむさん', 1234567890);
// card.owner = 'Ham';
console.log(card.owner);
console.log(card.debugPrint());
// card._secretNumber;
// card.secretNumber = 111;
console.log(card.debugPrint());
// console.log(card.secretNumber);
