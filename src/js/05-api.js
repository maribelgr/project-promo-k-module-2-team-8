"use strict";

//console.log(data);
const submitButton = document.querySelector(".js-createButton");
const twitterLink = document.querySelector(".js-linkTwitter")
const shareLink = document.querySelector(".js-createLink");
const shareSection = document.querySelector(".js-success");

function sendRequest() {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
      shareLink.innerHTML = "Error en el servidor";
    });
}

function showTwitter() {
  shareSection.classList.remove("hidden");
  submitButton.classList.remove("create-btn__button");
  submitButton.classList.add("create-btn__button--clicked");
}

function showURL(result) {
  if (result.success) {
    shareLink.href = result.cardURL;
    shareLink.innerHTML = result.cardURL;
  } else {
    shareLink.innerHTML = "ERROR:" + result.error;
  }
}

submitButton.addEventListener("click", sendRequest);
submitButton.addEventListener("click", showTwitter);

 function linkTwitter(result) {
  const twitterText =  encodeURIComponent(
    "¡Mirad qué tarjeta tan chula he creado con Frida Kards!"
  );
  const hashtagsTwitter = encodeURIComponent("adalabers,promoK,frontendDevelopers");
  const createdURL = shareLink.innerHTML;
  twitterLink.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${createdURL}&hashtags=${hashtagsTwitter}`;
 }

 twitterLink.addEventListener("click", linkTwitter);

