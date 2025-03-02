const mainHeading = document.getElementById("mainHeading");
const redBttn = document.getElementById("redButton");
const greenBttn = document.getElementById("greenButton");
const blueBttn = document.getElementById("blueButton");
const purpleBttn = document.getElementById("purpleButton");
const resetBttn = document.getElementById("resetButton");

redBttn.addEventListener("click", () => {
  mainHeading.style.color = "#e74c3c";
});

greenBttn.addEventListener("click", () => {
  mainHeading.style.color = "#2ecc71";
});

blueBttn.addEventListener("click", () => {
  mainHeading.style.color = "#3498db";
});

purpleBttn.addEventListener("click", () => {
  mainHeading.style.color = "#9b59b6";
});

resetBttn.addEventListener("click", () => {
  mainHeading.style.color = "#34495e";
});
