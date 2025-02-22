function checkEvenOdd(num) {
  if (typeof num === "number") {
    return num % 2 == 0 ? "Even" : "Odd";
  }
  else{
    return "Invalid number"
  }
}

const num = 3;
console.log(checkEvenOdd(num));
