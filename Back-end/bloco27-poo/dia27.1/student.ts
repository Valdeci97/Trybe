type Test = [number, number, number, number];
type Extra = [number, number];

class Student {
  private _enrollment: string;
  private _name: string;
  private _testGrades: Test;
  private _extraGrades: Extra;

  constructor(enroll: string, name: string, test: Test, extra: Extra) {
    this._enrollment = enroll;
    this._name = name;
    this._testGrades = test;
    this._extraGrades = extra;
  };

  sum(): number {
    const total = [...this._testGrades, ...this._extraGrades];
    const sum = total.reduce(((acc, curr) => acc + curr), 0);
    return sum;
  };

  average(): number {
    const total = [...this._testGrades, ...this._extraGrades];
    const sum = total.reduce(((acc, curr) => acc + curr), 0);
    return (sum / total.length);
  }
};

const student1 = new Student('20221356140', 'João do Teste', [4, 7.2, 10, 9.36], [5, 2]);
console.log(student1.sum());
console.log(student1.average());
