const addButton = () => {
  const button = document.createElement('button');
  button.classList.add('btn');
  button.innerHTML = 'Contador de cliques';
  document.body.appendChild(button);
}

addButton();

const addNewTags = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const spanArea = document.querySelector('div');
  const span = document.createElement('span');
  span.id = 'text-area';
  spanArea.appendChild(span);
  const click = document.querySelector('.btn');
}

addNewTags();

const clickCounter = () => {
  let text = document.querySelector('#text-area');
  let count = 0;
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => text.innerHTML = count += 1)  
}

clickCounter();