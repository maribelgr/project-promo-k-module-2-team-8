'use strict';

const inputList = document.querySelectorAll('.js-input');

let data = {
  name: 'Nombre Apellido',
  job: 'Front-end developer',
  tel: '',
  email: '',
  linkedin: '',
  github: '',
};

const saveField = function(event){
  event.preventDefault();
  console.log(event.currentTarget.id);
  console.log(event.currentTarget.value);
  data[event.currentTarget.id] = event.currentTarget.value;
  render();
};

for (const eachElement of inputList){
  eachElement.addEventListener('keyup', saveField);
}

const render = function(){
  const cardName = document.querySelector('.js-name');
  cardName.innerHTML = data[event.currentTarget.id];
  '' === data[event.currentTarget.id] && (cardName.innerHTML = 'Nombre Apellido');
};