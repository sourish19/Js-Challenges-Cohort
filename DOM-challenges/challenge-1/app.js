const body = document.getElementById("body");
const h1 = document.querySelector("body > h1");
const p = document.querySelector("body > p");
const bulbContainer = document.getElementsByClassName("bulb-container");
const bulb = document.getElementById("bulb");
const bulbBase = document.getElementsByClassName("bulb-base");
const toogleBttn = document.getElementById("toggleButton");
const switchStatus = document.getElementById("status");

function darkMode() {
  body.style.background = "#333";
  h1.style.color = "white";
  p.style.color = "white";
  switchStatus.style.color = "white";
  toogleBttn.innerText = "Turn Off";
  switchStatus.innerText = "Status: On";
  bulb.style.background = "#f1c40f";
  bulb.style.boxShadow = "0 0 50px rgba(241, 196, 15, 0.5)";
}

function whiteMode() {
  body.style.background = "";
  h1.style.color = "";
  p.style.color = "";
  switchStatus.style.color = "";
  toogleBttn.innerText = "Turn On";
  switchStatus.innerText = "Status: Off";
  bulb.style.background = "";
  bulb.style.boxShadow = "";
}

toogleBttn.addEventListener("click", () => {
  if (body.style.background === "") {
    darkMode();
  } else {
    whiteMode();
  }
});
