/* eslint-disable quotes */
"use strict";

const designContainer = document.querySelector(".js-design");
const fillContainer = document.querySelector(".js-fill");
const shareContainer = document.querySelector(".js-share");

const designCollapsable = document.querySelector(".js-design-collapsable");
const fillCollapsable = document.querySelector(".js-fill-collapsable");
const shareCollapsable = document.querySelector(".js-share-collapsable");

const designArrow = document.querySelector(".js-arrow-design");
const fillArrow = document.querySelector(".js-arrow-fill");
const shareArrow = document.querySelector(".js-arrow-share");

function openCollapsableDesign() {
  designContainer.classList.toggle("hidden");
  fillContainer.classList.add("hidden");
  shareContainer.classList.add("hidden");
  designArrow.classList.toggle("arrow-up");
}

function openCollapsableFill() {
  fillContainer.classList.toggle("hidden");
  designContainer.classList.add("hidden");
  shareContainer.classList.add("hidden");
  fillArrow.classList.toggle("arrow-up");
}

function openCollapsableShare() {
  shareContainer.classList.toggle("hidden");
  designContainer.classList.add("hidden");
  fillContainer.classList.add("hidden");
  shareArrow.classList.toggle("arrow-up");
}

designCollapsable.addEventListener("click", openCollapsableDesign);
fillCollapsable.addEventListener("click", openCollapsableFill);
shareCollapsable.addEventListener("click", openCollapsableShare);
