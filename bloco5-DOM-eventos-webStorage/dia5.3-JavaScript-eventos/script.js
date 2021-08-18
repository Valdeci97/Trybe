function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();
function createButton() {
  let holidayButton = document.createElement('button');
  let divButtons = document.querySelector('.buttons-container')
  holidayButton.innerText = 'Feriados';
  holidayButton.id = 'btn-holiday';
  divButtons.appendChild(holidayButton);
};

createButton();

function changingHolidays(){
  let newHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  newHolidayButton.addEventListener('click', function(){
    for (let i = 0; i < getHolidays.length; i += 1){
      if (getHolidays[i].style.backgroundColor === 'white'){
        getHolidays[i].style.backgroundColor = 'red';
      } else{
        getHolidays[i].style.backgroundColor = 'white';
      }
    };
  })
}

changingHolidays();

function createButtonFriday(a){
  let fridayButton = document.createElement('button');
  let divButtonsNew = document.querySelector('.buttons-container');
  fridayButton.innerHTML = a;
  fridayButton.id = 'btn-friday';
  divButtonsNew.appendChild(fridayButton);
};

createButtonFriday('Sexta-feira');

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

function zoomInDay(){
  let zoomIn = document.querySelector('#days');

  zoomIn.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '35px';
    event.target.style.fontWeight = '450px';
    event.target.style.backgroundColor = 'lightBlue';
  })
};

function zoomOutDay(){
  let zoomOut = document.querySelector('#days');

  zoomOut.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '0px';
    event.target.style.backgroundColor = '#eee';
  })
};

zoomInDay();
zoomOutDay();

function createTasks(String){
  let task = document.querySelector('.my-tasks');
  let span = document.createElement('span');
  span.innerHTML = String;
  task.appendChild(span);
}

createTasks('Goku');