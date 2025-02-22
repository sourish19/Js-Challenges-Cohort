function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num1 === 0 || num2 === 0) {
        return "Cannot divide by zero";
      } else {
        return (num1 / num2);
      }
    default:
      return "Invalid input";
  }
}

const num1 = 10;
const num2 = 5
const operator = "-";

console.log(calculator(num1, num2, operator));
