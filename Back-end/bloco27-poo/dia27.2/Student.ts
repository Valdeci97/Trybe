import Person from './person';

type Exams = [number, number, number, number];
type Extras = [number, number];

export default class Student extends Person {
  private _enrollment: string;

  constructor(
    name: string,
    birthDay: Date,
    private _examsGrades: Exams,
    private _worksGrades: Extras
  ) {
    super(name, birthDay);
    this._enrollment = this.enrollmentGenerator(16);
  };

  enrollmentGenerator(n: number): string {
    const num = '123456789';
    let enroll: string = '';

    for (let i = 0; i < n; i += 1) {
      enroll += num.charAt(Math.floor(Math.random() * num.length));
    }
    return enroll;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length !== this._enrollment.length) {
      throw new Error('A matrícula deve ter 16 caracteres de comprimento.');
    }
    this._enrollment = value;
  }

  get examsGrades(): Exams {
    return this._examsGrades;
  }

  set examsGrades([value, index]) {
    if (value < 0 || value > 10) throw new Error('Informe um valor entre 0 e 10');
    const options = [0, 1, 2, 3];
    const verify = options.includes(index);
    if (verify) {
      this._examsGrades[index] = value;
    }
    throw new Error('Não há como atribuir uma nota na posição indicada');
  }

  get worksGrades(): Exams {
    return this._examsGrades;
  }

  set worksGrades([value, index]) {
    if (value < 0 || value > 10) throw new Error('Informe um valor entre 0 e 10');
    const options = [0, 1];
    const verify = options.includes(index);
    if (verify) {
      this._worksGrades[index] = value;
    }
    throw new Error('Não há como atribuir uma nota na posição indicada');
  }

  sumGrade(): number {
    const total: number[] = [...this._examsGrades, ...this._worksGrades];
    return total.reduce(((acc, curr) => acc + curr), 0);
  }
}
