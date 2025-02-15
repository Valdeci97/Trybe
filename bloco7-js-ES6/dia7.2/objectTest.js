const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const address = 'address';
  const client = order.order.delivery.deliveryPerson;
  const clientTwo = order.name;
  const telephone = order.phoneNumber;
  const street = order[address].street;
  const streetNumber = order[address].number;
  const apartment = order[address].apartment;
  console.log(`Olá, ${client}. entrega para: ${clientTwo}, telefone: ${telephone}, ${street}, n°${streetNumber}, AP:${apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const newOrderClient = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza)
  const drink = order.order.drinks.coke.type;
  console.log(`Olá, ${newOrderClient}. O total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$50,00.`)
}

orderModifier(order);