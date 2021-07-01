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

//Exercicio1

function createNumbersOfDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const listOfDays = document.querySelector('#days');
  const fridayDays = [4, 11, 18, 25];
  const holidayDays = [24, 25, 31];

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const numberDays = dezDaysList[index];
    const dezDaysListItem = document.createElement('li');
    dezDaysListItem.innerHTML = numberDays;
    dezDaysListItem.classList.add('day');

    for (let index = 0; index < holidayDays.length; index +=1) {
      if (numberDays === holidayDays[index]) {
        dezDaysListItem.classList.add('holiday')
      };
    }

    for (let index = 0; index < fridayDays.length; index += 1){
      if (numberDays === fridayDays[index]) {
        dezDaysListItem.classList.add('friday');
      };
    }
    listOfDays.appendChild(dezDaysListItem);
  }
}

createNumbersOfDays();

//Exercicio2

function feriados(buttonName) {
  const buttonFeriados = document.createElement('button');
  buttonFeriados.innerHTML = buttonName;
  buttonFeriados.id = 'btn-holiday';

  const divButton = document.getElementsByClassName('buttons-container')[0];
  divButton.appendChild(buttonFeriados);
}

feriados('Feriados');

//Exercicio3

function holidayColor() {

  let buttonFeriados = document.querySelector('#btn-holiday');
  let normalColor = 'rgb(238,238,238)';
  let newColor = 'white';
  let holidayDays = document.querySelectorAll('.holiday');
  buttonFeriados.addEventListener('click', function (){
    for (let index = 0; index < holidayDays.length; index += 1) {
      if (holidayDays[index].style.backgroundColor === newColor) {
        holidayDays[index].style.backgroundColor = normalColor;
      } else {
        holidayDays[index].style.backgroundColor = newColor;
      }
    }
  })
};

holidayColor();