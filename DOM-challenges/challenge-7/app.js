const accordionButton = document.querySelectorAll(".accordion-button");
const accordionContent = document.querySelectorAll(".accordion-content");

accordionButton.forEach((bttn) => {
  bttn.addEventListener("click", () => {
    const parentDiv = bttn.parentElement;
    const targetDiv = parentDiv.querySelector(".accordion-content");

    targetDivHeight(targetDiv, parentDiv);
  });
});

function targetDivHeight(targetDiv, parentDiv) {
  if (targetDiv.style.maxHeight === "100px") {
    targetDiv.style.maxHeight = 0;
    parentDiv.classList.remove("active");
    return;
  }
  accordionContent.forEach((e) => {
    e.style.maxHeight = 0;
    e.parentElement.classList.remove("active")
  });
  targetDiv.style.maxHeight = "100px";
  parentDiv.classList.add("active");
}
