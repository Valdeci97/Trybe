class Customer {
  constructor(private _name: string) {};

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('O nome deve ter mais de 3 carácteres');
    this._name = value;
  }
}

class OrderItem {
  constructor(private _meal: string, private _price: number) {};

  get name(): string {
    return this._meal;
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('A refeição deve ter mais de 3 carácteres');
    this._meal = value;
  }

  get price(): number {
    return this._price;
  }
};

class Order {
  constructor(
    private _client: Customer,
    private _items: OrderItem[],
    private _paymentMethod: string,
    private _off: number
  ) {};

  get client(): Customer {
    return this._client;
  }

  set client(value: Customer) {
    this._client = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) throw new Error('A lista de itens precisa ter ao menos um item.');
    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._off;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O disconto não pode ser um valor negatívo.');
    }
    this._off = value;
  }

  calculateTotal(): number {
    return this.items.
      reduce((previousValue, item) => {
        const total = previousValue += item.price;
        return total;
    }, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this._off);
  }
}

const customer1 = new Customer('Denis');
const sandwich = new OrderItem('Sanduiche de Presunto', 12.98);
const juice = new OrderItem('Suco de laranja 250mL', 4.5);
const chocolateCake = new OrderItem('Bolo de chocolate (fatia)', 6.00);

const mealOrders = [sandwich, juice, chocolateCake];

const order = new Order(customer1, mealOrders, 'cartão de crédito visa', 0.05);

console.log(order);

console.log(order.calculateTotal());