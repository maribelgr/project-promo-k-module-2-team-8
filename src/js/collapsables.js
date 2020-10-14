/* eslint-disable quotes */
"use strict";

const designContainer = document.querySelector(".js-design");
const fillContainer = document.querySelector(".js-fill");
const shareContainer = document.querySelector(".js-share");
const formContainer = document.querySelectorAll(".js-");

const designCollapsable = document.querySelector(".js-design-collapsable");
const fillCollapsable = document.querySelector(".js-fill-collapsable");
const shareCollapsable = document.querySelector(".js-share-collapsable");

// function openCollapsable() {
//   return designContainer.classList.toggle("hidden");
// }

// function openCollapsable(event) {
//   const selectedCollapsable = event.currentTarget;
//   selectedCollapsable.classList.toggle("hidden");
// }

designCollapsable.addEventListener("click", openCollapsable);
fillCollapsable.addEventListener("click", openCollapsable);
shareCollapsable.addEventListener("click", openCollapsable);
