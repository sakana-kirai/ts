export {};

type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'Hello';

type Profile = {
  name: string;
  age: number;
};

const example1: Profile = {
  name: 'ham',
  age: 33,
};

type Profile2 = typeof example1;
