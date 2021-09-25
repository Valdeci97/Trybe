const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// uppercase('goku', (element) => {
//   console.log(element) só para entender melhor o funcionamento.
// });

module.exports = uppercase;