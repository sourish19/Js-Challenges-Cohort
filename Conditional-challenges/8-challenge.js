function checkNumberType(num) {
  if (typeof num === "number") {
    if (num > 0) {
      return "positive";
    } else if (num < 0) {
      return "negative";
    } else {
      return "zero";
    }
  } else {
    return "Invalid Input";
  }
}

const num = "1"

console.log(checkNumberType(num));

