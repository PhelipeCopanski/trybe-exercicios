const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDaysOfTheMonth = () => {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      getDaysList.appendChild(dayItem); 
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday'; 
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
}

createDaysOfTheMonth();

// const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// const createDaysOfMonth = () => {
//     const decemberDays = document.querySelector('#days');
    
//     for (let index = 0; index < decemberDaysList.length; index += 1) {
//         const daysOfMonth = decemberDaysList[index];
//         const dayListMonth = document.createElement('li');
//         dayListMonth.innerHTML = daysOfMonth;
        
//         if (day === 24 || day === 31) {
//             // Caso o dia for 24 ou 31
//             dayListMonth.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
//             decemberDays.appendChild(dayListMonth); // Anexe o li criado como elemento filho do ul
//           } else if (day === 4 || day === 11 || day === 18) {
//             // Caso o dia for 4, 11 ou 18
//             dayListMonth.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
//             decemberDays.appendChild(dayListMonth);
//           } else if (day === 25) {
//             // Caso o dia for 25
//             dayListMonth.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
//             decemberDays.appendChild(dayListMonth);
//           } else {
//             // Caso seja qualquer outro dia adicione a classe day ao li criado
//             dayListMonth.className = 'day';
//             decemberDays.appendChild(dayListMonth);
//           }
//         }
//     }

// createDaysOfMonth();