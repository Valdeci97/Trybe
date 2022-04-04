import IEmployee from './interfaceEmployee';
import Person from './person';

export default class Teacher extends Person implements IEmployee {
  registration: string;
  salary: number;
  admissionDate: Date;
  subject: string;

  constructor(salary: number, admissionDate: Date, name: string, birthDate: Date, subject: string) {
    super(name, birthDate);
    this.salary = salary;
    this.admissionDate = admissionDate;
    this.registration = this.generateRegistration(16);
    this.subject = subject;
  };
  
  generateRegistration(value: number): string {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const alphaUpper = alpha.toUpperCase();
    const num = '0123456789';
    const special = '*-+/\|!@#%&()_=£¢§';
    const generator = alpha + alphaUpper + num + special;
    let registration = '';
    for (let i = 0; i < value; i += 1) {
      registration += generator.charAt(Math.floor(Math.random() * generator.length));
    }
    return registration;
  }

  get mySalary(): number {
    return this.salary;
  }

  set mySalary(value: number) {
    if (value < 1212) {
      throw new Error('Não podemos receber menos que o salário mínimo brasileiro R$1212,00');
    }
    this.salary = value;
  }

  get myRegister(): string {
    return this.registration;
  }

  set myRegister(value: string) {
    if (value.length !== 16) {
      throw new Error('Impossível atualizar registro com menos ou mais de 16 caracteres');
    }
    this.registration = value;
  }

}

const mathTeacher = new Teacher(
  2256,
  new Date('2008-09-17'),
  'Jorge',
  new Date('1982-10-25'),
  'Matemática'
);

console.log(mathTeacher.myRegister);
