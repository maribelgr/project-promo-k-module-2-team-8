"use strict";

const paletteGreen = document.querySelector(".js-palette-green");
const paletteRed = document.querySelector(".js-palette-red");
const paletteGrey = document.querySelector(".js-palette-grey");

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

function changeColorGreen() {
  if (paletteGreen.value === "color-palette-1") {
    paletteName.classList.add("dark-green");
    // paletteName.classList.remove("dark-grey");
    paletteJob.classList.add("green");
    paletteBorder.classList.add("green");
    palettePhone.classList.add("dark-green");
    paletteEmail.classList.add("dark-green");
    paletteLinkedin.classList.add("dark-green");
    paletteGithub.classList.add("dark-green");
    paletteBorderPhone.classList.add("green");
    paletteBorderEmail.classList.add("green");
    paletteBorderLinkedin.classList.add("green");
    paletteBorderGithub.classList.add("green");
  }
}

function changeColorRed() {
  if (paletteRed.value === "color-palette-2") {
    paletteName.classList.add("dark-red");
    paletteJob.classList.add("red");
    paletteBorder.classList.add("red");
    palettePhone.classList.add("dark-red");
    paletteEmail.classList.add("dark-red");
    paletteLinkedin.classList.add("dark-red");
    paletteGithub.classList.add("dark-red");
    paletteBorderPhone.classList.add("orange");
    paletteBorderEmail.classList.add("orange");
    paletteBorderLinkedin.classList.add("orange");
    paletteBorderGithub.classList.add("orange");
  }
}

function changeColorGrey() {
  if (paletteGrey.value === "color-palette-3") {
    paletteName.classList.remove("dark-red");
    paletteName.classList.remove("dark-green");
    paletteName.classList.add("dark-grey");
    paletteJob.classList.add("yellow");
    paletteBorder.classList.add("yellow");
    palettePhone.classList.add("dark-grey");
    paletteEmail.classList.add("dark-grey");
    paletteLinkedin.classList.add("dark-grey");
    paletteGithub.classList.add("dark-grey");
    paletteBorderPhone.classList.add("grey");
    paletteBorderEmail.classList.add("grey");
    paletteBorderLinkedin.classList.add("grey");
    paletteBorderGithub.classList.add("grey");
  }
}


paletteGreen.addEventListener("change", changeColorGreen);
paletteRed.addEventListener("change", changeColorRed);
paletteGrey.addEventListener("change", changeColorGrey);