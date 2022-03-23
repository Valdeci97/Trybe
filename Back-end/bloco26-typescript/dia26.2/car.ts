enum Color {
  black = 'Preta',
  white = 'Branca',
  red = 'vermelha',
  silver = 'prata',
};

enum Directions {
  left = 'esquerda',
  right = 'direita',
};

enum Doors {
  driver = 'Motorista',
  ride = 'Carona',
  behind_driver = 'Pessoa atrás do motorista',
  behind_ride = 'Pessoa atrás do carona',
};

class Car {
  brand: string;
  color: Color;
  doors: number;

  constructor(marca: string, cor: Color, portas: number) {
    this.brand = marca;
    this.color = cor;
    this.doors = portas;
  };

  validateDoors(door: Doors): boolean {
    const options: string[] = [
      'Motorista',
      'Carona',
      'Pessoa atrás do motorista',
      'Pessoa atrás do carona'
    ];

    if (!options.includes(door)) return false;

    return true;
  };

  turnOn(): void { console.log('Ligando carro.'); };

  turnOff(): void { console.log('Desligando o carro.'); };

  turn(direction: Directions): void { console.log(`Virando para a ${direction}.`); };

  speedUp(): void { console.log('Acelerando o carro.'); };

  speedDown(): void { console.log('Desacelerando o carro.'); };

  stop(): void { console.log('Parando o carro.'); };

  honk(): void { console.log('FONFON!'); };

  openTheDoor(door: Doors): void {
    const isValid = this.validateDoors(door);
    if (!isValid) console.log(`A porta ${door} não é válida`);
    console.log(`Abrindo a porta ${door}.`);
  };

  closeTheDoor(door: Doors): void {
    const isValid = this.validateDoors(door);
    if (!isValid) console.log(`A porta ${door} não é válida`);
    console.log(`Fechando a porta ${door}.`);
  };
};

const carro = new Car('Volkswagen', Color.silver, 4);

carro.openTheDoor(Doors.driver);
carro.closeTheDoor(Doors.driver);
carro.turnOn();
carro.speedUp();
carro.speedUp();
carro.speedDown();
carro.turn(Directions.left);
carro.speedUp();
carro.speedDown();
carro.turn(Directions.right);
carro.speedUp();
carro.speedUp();
carro.speedDown();
carro.turn(Directions.right);
carro.speedDown();
carro.stop();
carro.honk();
carro.openTheDoor(Doors.behind_ride);
carro.closeTheDoor(Doors.behind_ride);
carro.speedUp();
carro.turn(Directions.right);
carro.speedUp();
carro.speedUp();
carro.speedDown();
carro.turn(Directions.left);
carro.turn(Directions.left);
carro.speedUp();
carro.speedDown();
carro.turn(Directions.right);
carro.turn(Directions.right);
carro.speedDown();
carro.stop();
carro.turnOff();
carro.openTheDoor(Doors.behind_ride);
carro.closeTheDoor(Doors.behind_ride);
carro.turnOn();
console.log('Here we go again...');
