export default abstract class Person {
  constructor (private _name: string = '', private _birthDate: Date = new Date()) {};
  
  get name(): string {
    return this._name;
  }
  
  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }
  
  get birthDate(): Date {
    return this._birthDate;
  }
  
  set birthDate(value: Date) {
    this.validateDate(value);
    this._birthDate = value;
  }
  
  validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve ter ao menos 3 letras');
  }
  
  validateDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data futura.');
    }
    if (Person.getAge(value) > 120) {
      throw new Error('A pessoa não pode possuir mais de 120 anos');
    }
  }
  
  static getAge(value: Date): number {
    const age = Math.abs(new Date().getTime() - value.getTime());
    const FULL_YEAR_MS = 31_536_000_000;
    // (60 seconds * 60 minutes) => 1 hour * 24 hours => 1 day * 365 => 1 year * 1000 = 1 year in milliseconds;
    return Math.floor(age / FULL_YEAR_MS);
  }

  getAage(value: Date): number {
    const age = Math.abs(new Date().getTime() - value.getTime());
    return age;
  }
}