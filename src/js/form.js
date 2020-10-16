'use strict';

const inputList = document.querySelectorAll('.js-input');

let data = {
  name: 'Nombre Apellido',
  job: '',
  tel: '',
  email: '',
  linkedin: '',
  github: '',
};

const saveField = function (event) {
  event.preventDefault();
  data[event.currentTarget.id] = event.currentTarget.value;
  render();
};

for (const eachElement of inputList) {
  eachElement.addEventListener('keyup', saveField);
}

const render = function () {
  const cardName = document.querySelector('.js-name');
  cardName.innerHTML = data.name;
  '' === data.name && (cardName.innerHTML = 'Nombre Apellido'); //Cuando esté vacío, que me pinte el valor 'Nombre Apellido'
  const cardJob = document.querySelector('.js-job');
  cardJob.innerHTML = data.job;
  '' === data.job && (cardJob.innerHTML = 'Front-end developer');
  const cardTel = document.querySelector('.js-tel');
  cardTel.href = data.tel;
  const cardEmail = document.querySelector('.js-email');
  cardEmail.href = 'mailto:' + data.email;
  const cardLinkedin = document.querySelector('.js-linkedin');
  cardLinkedin.href = 'https://www.linkedin.com/in/' + data.linkedin;
  const cardGithub = document.querySelector('.js-github');
  cardGithub.href = 'https://github.com/' + data.github;
};

//RESET
// data.name = '';