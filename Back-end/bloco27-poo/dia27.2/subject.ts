export default class Subject {
  constructor(private _name: string) {
    this.validateName(_name);
  }

  validateName(value: string) {
    if (value.length < 3) throw new Error('O nome deve no mínimo 3 caracateres');
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }
}