const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");
const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

String.prototype.removeCharAt = function (i) {
  let tmp = this.split(""); // convert to an array
  tmp.splice(i - 1, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
  return tmp.join(""); // reconstruct the string
};

let nameStr = "";
nameInput.addEventListener("input", (pressedKey) => {
  if (/^[a-zA-Z0-9]$/.test(pressedKey.key) || pressedKey.key === "Backspace") {
    
    if (pressedKey.key == "Backspace") {
      nameDisplay.innerText = nameDisplay.innerText.removeCharAt(
        nameDisplay.innerText.length
      );
      nameStr = nameStr.removeCharAt(nameStr.length);
    }

    if (nameDisplay.innerText.length === 1) {
      nameDisplay.innerText = "Not provided";
    } else {
      nameStr += pressedKey.key;
      nameDisplay.innerText = nameStr;
    }
  }
});

let jobStr = "";
jobInput.addEventListener("keyup", (pressedKey) => {
  if (jobDisplay.innerText.length == 1) {
    jobDisplay.innerText = "Not provided";
  }
  if (pressedKey.key == "Backspace") {
    jobDisplay.innerText = jobDisplay.innerText.removeCharAt(
      jobDisplay.innerText.length
    );
    jobStr = jobStr.removeCharAt(jobStr.length);
  } else {
    jobStr += pressedKey.key;
    jobDisplay.innerText = jobStr;
  }
});

let ageStr = "";
ageInput.addEventListener("keyup", (pressedKey) => {
  if (ageDisplay.innerText.length == 1) {
    ageDisplay.innerText = "Not provided";
  }
  if (pressedKey.key == "Backspace") {
    ageDisplay.innerText = ageDisplay.innerText.removeCharAt(
      ageDisplay.innerText.length
    );
    ageStr = ageStr.removeCharAt(ageStr.length);
  } else {
    ageStr += pressedKey.key;
    ageDisplay.innerText = ageStr;
  }
});

let bioStr = "";
bioInput.addEventListener("keyup", (pressedKey) => {
  if (bioDisplay.innerText.length == 1) {
    bioDisplay.innerText = "Not provided";
  }
  if (pressedKey.key == "Backspace") {
    bioDisplay.innerText = bioDisplay.innerText.removeCharAt(
      bioDisplay.innerText.length
    );
    bioStr = bioStr.removeCharAt(bioStr.length);
  } else {
    bioStr += pressedKey.key;
    bioDisplay.innerText = bioStr;
  }
});
