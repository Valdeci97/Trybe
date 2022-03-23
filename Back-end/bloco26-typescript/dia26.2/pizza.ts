type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
};

const firstPizza: Pizza = {
  flavor: 'calabresa',
  slices: 8,
};

const secondPizza: Pizza = {
  flavor: 'marguerita',
  slices: 6,
};

const thirdPizza: Pizza = {
  flavor: 'nutella',
  slices: 4,
};

type Common = 'Calabresa' | 'Frango' | 'Pepperoni';

type Vegetarian = 'Marguerita' | 'Palmito' | 'Cogumelo';

type Sweet = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

interface CommonPizza extends Pizza {
  flavor: Common;
};

interface VegetarianPizza extends Pizza {
  flavor: Vegetarian;
}

interface SweetPizza extends Pizza {
  flavor: Sweet;
}

const calabresa: CommonPizza = {
    flavor: "Calabresa",
    slices: 6
}

console.log(calabresa);

const frango: CommonPizza = {
    flavor: "Frango",
    slices: 8
}

console.log(frango);

const pepperoni: CommonPizza = {
    flavor: "Pepperoni",
    slices: 6
}

console.log(pepperoni);

const marguerita: VegetarianPizza = {
    flavor: "Marguerita",
    slices: 8
}

console.log(marguerita);

const palmito: VegetarianPizza = {
    flavor: "Palmito",
    slices: 8
}

console.log(palmito);

const goiabadaEQueijo: SweetPizza = {
    flavor: "Goiabada com Queijo",
    slices: 4
}

console.log(goiabadaEQueijo);
