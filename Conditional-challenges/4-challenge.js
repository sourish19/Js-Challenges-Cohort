function calculateGrade(marks) {
  if (typeof marks === "number") {
    if (marks >= 90) {
      return "A";
    } else if (marks >= 80) {
      return "B";
    } else if (marks >= 70) {
      return "C";
    } else if (marks >= 60) {
      return "D";
    } else {
      return "F";
    }
  } else {
    return "Invalid number";
  }
}

const marks = 66;

console.log(calculateGrade(marks));
