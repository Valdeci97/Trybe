const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercício 1
function createSchedule() {
  lesson2.turno = 'manhã';
};

createSchedule();

//Exercício 2
const objeto = (obj) => Object.keys(obj);

//exercício 3
const objectLength = (obj) => Object.keys(obj).length;

//exercício 4
const objectValue = obj => Object.values(obj);

//Exercício 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

//Exercício 6
const totalOfStudents = (obj) => {
  let total = 0;
  const list = Object.keys(obj);
  for (let index in list){
    total += obj[list[index]].numeroEstudantes;
  }
  return total;
};

//Exercício 7
const keyValue = (obj, index) => {
  const key = Object.keys(obj);
  return obj[key[index]];
};

//Exercício 8
const thereIs = (obj, key, value) => {
  const list = Object.entries(obj);
  for (let item in list) {
    if (list[item][0] === key && list[item][1] === value) {
      return true;
    }
  }
  return false;
};

console.log(thereIs(lesson1, 'turno', 'manhã'));