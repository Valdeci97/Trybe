function createOptions() {
  let states = document.querySelector('#state');
  let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < estados.length; index += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = estados[index];
    states.appendChild(createOptions).value = estados[index];
  }
};

createOptions();