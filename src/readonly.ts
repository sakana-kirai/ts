export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('はむさんん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
