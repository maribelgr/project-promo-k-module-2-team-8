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
  return designContainer.classList.toggle("hidden");
}

function openCollapsableFill() {
  if (designContainer.classList.contains("hidden")) {
    fillContainer.classList.remove("hidden");
  }
  return fillContainer.classList.toggle("hidden");
}

function openCollapsableShare() {
  return shareContainer.classList.toggle("hidden");
}

designCollapsable.addEventListener("click", openCollapsableDesign);
fillCollapsable.addEventListener("click", openCollapsableFill);
shareCollapsable.addEventListener("click", openCollapsableShare);
