"use strict";

//console.log(data);
const submitButton = document.querySelector(".js-createButton");
const shareLink = document.querySelector(".js-createLink");

function sendRequest() {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function (resp) { return resp.json(); })
    .then(function (result) { showURL(result); })
    .catch(function (error) { console.log(error); shareLink.innerHTML = "Error en el servidor" });
}


function showURL(result) {
  if (result.success) {
    shareLink.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  } else {
    shareLink.innerHTML = 'ERROR:' + result.error;
  }
}


submitButton.addEventListener('click', sendRequest);