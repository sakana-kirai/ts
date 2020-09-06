export {};

abstract class Animal {
  abstract cry(): String;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrr';
  }
}
