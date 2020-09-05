export {};

let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1955 };

let profile2: {
  name: string;
} = { name: 'Ham' };
profile2 = { name: 'test' };

console.log(profile2);
