/* eslint-disable quotes */
"use strict";

const designContainer = document.querySelector(".js-design");
const fillContainer = document.querySelector(".js-fill");
const shareContainer = document.querySelector(".js-share");
// const formContainer = document.querySelectorAll(".js-form");

const designCollapsable = document.querySelector(".js-design-collapsable");
const fillCollapsable = document.querySelector(".js-fill-collapsable");
const shareCollapsable = document.querySelector(".js-share-collapsable");

function openCollapsableDesign() {
  designContainer.classList.toggle("hidden");
  fillContainer.classList.add("hidden");
  shareContainer.classList.add("hidden");
}

function openCollapsableFill() {
  fillContainer.classList.toggle("hidden");
  designContainer.classList.add("hidden");
  shareContainer.classList.add("hidden");
}

function openCollapsableShare() {
  shareContainer.classList.toggle("hidden");
  designContainer.classList.add("hidden");
  fillContainer.classList.add("hidden");
}

designCollapsable.addEventListener("click", openCollapsableDesign);
fillCollapsable.addEventListener("click", openCollapsableFill);
shareCollapsable.addEventListener("click", openCollapsableShare);
