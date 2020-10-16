'use strict';

const inputList = document.querySelectorAll('.js-input');

let data = {
  name = "Nombre Apellido",
  job = "Front-end developer",
  email = "",
  tel = "",
  linkedin = "",
  github ="",
}

const saveField = function(event){
  event.preventDefault();
  console.log(event.currentTarget.id);
  console.log(event.currentTarget.value);
  data[event.currentTarget.id] = event.currentTarget.value;
  render();
}

for (const eachElement of inputList){
  eachElement.addEventListener('blur', saveField);
}


const render = function(){

}