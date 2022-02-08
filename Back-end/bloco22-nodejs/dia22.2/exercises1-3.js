const onlyNumbers = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number'){
      reject('Informe apenas números');
    }
    const result = (a + b) * c;
    result >= 50 ? resolve(result) : reject('Valor muito baixo');
  });
  return promise;
}

const random = Math.floor(Math.random() * 100 + 1);

// onlyNumbers(random, random, random)
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.log(reject));

// onlyNumbers(random, 'b', random)
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.log(reject));

// onlyNumbers(1, 1, 1)  
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.log(reject));

const callOnlyNumbers = async () => {
  try {
    const result = await onlyNumbers('a', random, random);
    console.log(result);
  } catch(err) {
    console.log(err);
  }
}

callOnlyNumbers();