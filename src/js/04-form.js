/* eslint-disable quotes */
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

const colorName = document.querySelector(".js-name");
const colorJob = document.querySelector(".js-job");
const colorBorder = document.querySelector(".js-border");
const colorPhone = document.querySelector(".js-color-tel");
const colorEmail = document.querySelector(".js-color-email");
const colorLinkedin = document.querySelector(".js-color-linkedin");
const colorGithub = document.querySelector(".js-color-github");
const colorBorderPhone = document.querySelector(".js-border-tel");
const colorBorderEmail = document.querySelector(".js-border-email");
const colorBorderLinkedin = document.querySelector(".js-border-linkedin");
const colorBorderGithub = document.querySelector(".js-border-github");

let data = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

const saveField = function (event) {
  event.preventDefault();
  data[event.currentTarget.id] = event.currentTarget.value;
  render();
  setInLocalStorage();
};

const setInLocalStorage = () => {
  const stringData = JSON.stringify(data);
  localStorage.setItem("userData", stringData);
  console.log(stringData);
};

const getFromLocalStorage = () => {
  const stringUser = localStorage.getItem("userData");
  const user = JSON.parse(stringUser);
  if (user !== null) {
    // for (let i = 0; i < inputList.length; i++) {
    //   inputList[i].value = user...
    // }
    inputList[0].value = user.name;
    inputList[1].value = user.job;
    inputList[2].value = user.phone;
    inputList[3].value = user.email;
    inputList[4].value = user.linkedin;
    inputList[5].value = user.github;
    data = user;

    const selectedPaletteElement = document.querySelector(
      "#color-palette-" + data.palette
    );
    selectedPaletteElement.click();
    if (data.photo !== "") {
      profileImage.style.backgroundImage = `url(${data.photo})`;
      profilePreview.style.backgroundImage = `url(${data.photo})`;
    }
    // const selectedPaletteElements = document.querySelectorAll(".js-palettes");
    // selectedPaletteElement[0].value = user.palette;
    // selectedPaletteElement[1].value = user.palette;
    // selectedPaletteElement[2].value = user.palette;

    render();
  }
};

for (const eachElement of inputList) {
  eachElement.addEventListener("keyup", saveField);
  // eachElement.addEventListener("keyup", handleInput);
}

const render = function () {
  // cardName.innerHTML = data.name === "" ? "Nombre Apellido" : data.name;
  cardName.innerHTML = data.name || "Nombre Apellido";
  // cardName.innerHTML = data.name;
  // "" === data.name && (cardName.innerHTML = "Nombre Apellido");
  cardJob.innerHTML = data.job || "Front-end developer";
  cardTel.href = data.phone;
  cardEmail.href = "mailto:" + data.email;
  cardLinkedin.href = "https://www.linkedin.com/in/" + data.linkedin;
  cardGithub.href = "https://github.com/" + data.github;

  // const stringData = JSON.stringify(data);
  // localStorage.setItem("userName", data.name);
  // localStorage.getItem("userName");

  // console.log(stringData);
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
  data.phone = "";
  cardEmail.href = "mailto:";
  data.email = "";
  cardLinkedin.href = "https://www.linkedin.com/in/";
  data.linkedin = "";
  cardGithub.href = "https://github.com";
  data.github = "";
  localStorage.removeItem("userData");
}

function colorReset(event) {
  if (event.currentTarget.value !== "color-color-1") {
    colorName.classList.remove("dark-grey");
    colorName.classList.remove("dark-red");
    colorJob.classList.remove("red");
    colorJob.classList.remove("yellow");
    colorBorder.classList.remove("red");
    colorBorder.classList.remove("yellow");
    colorPhone.classList.remove("dark-red");
    colorPhone.classList.remove("dark-grey");
    colorEmail.classList.remove("dark-red");
    colorEmail.classList.remove("dark-grey");
    colorLinkedin.classList.remove("dark-red");
    colorLinkedin.classList.remove("dark-grey");
    colorGithub.classList.remove("dark-red");
    colorGithub.classList.remove("dark-grey");
    colorBorderPhone.classList.remove("orange");
    colorBorderPhone.classList.remove("grey");
    colorBorderEmail.classList.remove("orange");
    colorBorderEmail.classList.remove("grey");
    colorBorderLinkedin.classList.remove("orange");
    colorBorderLinkedin.classList.remove("grey");
    colorBorderGithub.classList.remove("orange");
    colorBorderGithub.classList.remove("grey");
  }
}
reset.addEventListener("click", clickReset);
reset.addEventListener("click", colorReset);
