const colorTitle = document.querySelector('header');
colorTitle.style.backgroundColor = 'green'

const emergency = document.getElementsByClassName('emergency-tasks')[0];
emergency.style.backgroundColor = 'rgb(255, 159, 132)'

const noEmergency = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergency.style.backgroundColor = 'rgb(249, 219, 94)';

const emergencyHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyHeaders.length; index += 1) {
    emergencyHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)'