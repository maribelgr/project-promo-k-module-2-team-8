/* eslint-disable quotes */
"use strict";

const paletteGreen = document.querySelector(".js-palette-green");
const paletteRed = document.querySelector(".js-palette-red");
const paletteGrey = document.querySelector(".js-palette-grey");
// const inputsRadio = document.querySelectorAll(".js-palette");

const paletteName = document.querySelector(".js-name");
const paletteJob = document.querySelector(".js-job");
const paletteBorder = document.querySelector(".js-border");
const palettePhone = document.querySelector(".js-color-tel");
const paletteEmail = document.querySelector(".js-color-email");
const paletteLinkedin = document.querySelector(".js-color-linkedin");
const paletteGithub = document.querySelector(".js-color-github");

const paletteBorderPhone = document.querySelector(".js-border-tel");
const paletteBorderEmail = document.querySelector(".js-border-email");
const paletteBorderLinkedin = document.querySelector(".js-border-linkedin");
const paletteBorderGithub = document.querySelector(".js-border-github");

function changeColor(event) {
  if (event.currentTarget.value === "color-palette-1") {
    paletteName.classList.remove("dark-grey");
    paletteName.classList.remove("dark-red");
    paletteJob.classList.remove("red");
    paletteJob.classList.remove("yellow");
    paletteBorder.classList.remove("red");
    paletteBorder.classList.remove("yellow");
    palettePhone.classList.remove("dark-red");
    palettePhone.classList.remove("dark-grey");
    paletteEmail.classList.remove("dark-red");
    paletteEmail.classList.remove("dark-grey");
    paletteLinkedin.classList.remove("dark-red");
    paletteLinkedin.classList.remove("dark-grey");
    paletteGithub.classList.remove("dark-red");
    paletteGithub.classList.remove("dark-grey");
    paletteBorderPhone.classList.remove("orange");
    paletteBorderPhone.classList.remove("grey");
    paletteBorderEmail.classList.remove("orange");
    paletteBorderEmail.classList.remove("grey");
    paletteBorderLinkedin.classList.remove("orange");
    paletteBorderLinkedin.classList.remove("grey");
    paletteBorderGithub.classList.remove("orange");
    paletteBorderGithub.classList.remove("grey");
    data.palette = 1;
  } if (event.currentTarget.value === "color-palette-2") {
    paletteName.classList.remove("dark-green");
    paletteName.classList.remove("dark-grey");
    paletteName.classList.add("dark-red");
    paletteJob.classList.remove("green");
    paletteJob.classList.remove("yellow");
    paletteJob.classList.add("red");
    paletteBorder.classList.remove("green");
    paletteBorder.classList.remove("yellow");
    paletteBorder.classList.add("red");
    palettePhone.classList.remove("dark-green");
    palettePhone.classList.remove("dark-grey");
    palettePhone.classList.add("dark-red");
    paletteEmail.classList.remove("dark-green");
    paletteEmail.classList.remove("dark-grey");
    paletteEmail.classList.add("dark-red");
    paletteLinkedin.classList.remove("dark-green");
    paletteLinkedin.classList.remove("dark-grey");
    paletteLinkedin.classList.add("dark-red");
    paletteGithub.classList.remove("dark-green");
    paletteGithub.classList.remove("dark-grey");
    paletteGithub.classList.add("dark-red");
    paletteBorderPhone.classList.remove("green");
    paletteBorderPhone.classList.remove("grey");
    paletteBorderPhone.classList.add("orange");
    paletteBorderEmail.classList.remove("green");
    paletteBorderEmail.classList.remove("grey");
    paletteBorderEmail.classList.add("orange");
    paletteBorderLinkedin.classList.remove("green");
    paletteBorderLinkedin.classList.remove("grey");
    paletteBorderLinkedin.classList.add("orange");
    paletteBorderGithub.classList.remove("green");
    paletteBorderGithub.classList.remove("grey");
    paletteBorderGithub.classList.add("orange");
    data.palette = 2;
  } if (event.currentTarget.value === "color-palette-3") {
    paletteName.classList.remove("dark-red");
    paletteName.classList.remove("dark-green");
    paletteName.classList.add("dark-grey");
    paletteJob.classList.remove("green");
    paletteJob.classList.remove("red");
    paletteJob.classList.add("yellow");
    paletteBorder.classList.remove("green");
    paletteBorder.classList.remove("red");
    paletteBorder.classList.add("yellow");
    palettePhone.classList.remove("dark-green");
    palettePhone.classList.remove("dark-red");
    palettePhone.classList.add("dark-grey");
    paletteEmail.classList.remove("dark-green");
    paletteEmail.classList.remove("dark-red");
    paletteEmail.classList.add("dark-grey");
    paletteLinkedin.classList.remove("dark-green");
    paletteLinkedin.classList.remove("dark-red");
    paletteLinkedin.classList.add("dark-grey");
    paletteGithub.classList.remove("dark-green");
    paletteGithub.classList.remove("dark-red");
    paletteGithub.classList.add("dark-grey");
    paletteBorderPhone.classList.remove("green");
    paletteBorderPhone.classList.remove("orange");
    paletteBorderPhone.classList.add("grey");
    paletteBorderEmail.classList.remove("green");
    paletteBorderEmail.classList.remove("orange");
    paletteBorderEmail.classList.add("grey");
    paletteBorderLinkedin.classList.remove("green");
    paletteBorderLinkedin.classList.remove("orange");
    paletteBorderLinkedin.classList.add("grey");
    paletteBorderGithub.classList.remove("green");
    paletteBorderGithub.classList.remove("orange");
    paletteBorderGithub.classList.add("grey");
    data.palette = 3;
  }
  setInLocalStorage();
}

paletteGreen.addEventListener("change", changeColor);
paletteRed.addEventListener("change", changeColor);
paletteGrey.addEventListener("change", changeColor);
