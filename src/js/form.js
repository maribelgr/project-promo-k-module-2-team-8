"use strict";

const inputList = document.querySelectorAll(".js-input");
const cardName = document.querySelector(".js-name");
const cardJob = document.querySelector(".js-job");
const previewImg = document.querySelector(".js__profile-preview");
const cardImg = document.querySelector(".js__profile-image");
const cardTel = document.querySelector(".js-tel");
const cardEmail = document.querySelector(".js-email");
const cardLinkedin = document.querySelector(".js-linkedin");
const cardGithub = document.querySelector(".js-github");

let data = {
  name: "Nombre Apellido",
  job: "",
  tel: "",
  email: "",
  linkedin: "",
  github: "",
};

const saveField = function (event) {
  event.preventDefault();
  data[event.currentTarget.id] = event.currentTarget.value;
  render();
};

for (const eachElement of inputList) {
  eachElement.addEventListener("keyup", saveField);
}

const render = function () {
  cardName.innerHTML = data.name;
  "" === data.name && (cardName.innerHTML = "Nombre Apellido");
  cardJob.innerHTML = data.job;
  "" === data.job && (cardJob.innerHTML = "Front-end developer");
  cardTel.href = data.tel;
  cardEmail.href = "mailto:" + data.email;
  cardLinkedin.href = "https://www.linkedin.com/in/" + data.linkedin;
  cardGithub.href = "https://github.com/" + data.github;
};

const reset = document.querySelector(".js-reset");

function clickReset() {
  document.querySelector(".js-form").reset();
  cardName.innerHTML = "Nombre Apellido";
  data.name = "";
  cardJob.innerHTML = "Front-end developer";
  data.job = "";
  previewImg.style.backgroundImage = "";
  cardImg.style.backgroundImage = "";
  cardTel.href = "";
  data.tel = "";
  cardEmail.href = "mailto:";
  data.email = "";
  cardLinkedin.href = "https://www.linkedin.com/in/";
  data.linkedin = "";
  cardGithub.href = "https://github.com";
  data.github = "";
}

reset.addEventListener("click", clickReset);
