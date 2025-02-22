function findLargest(a, b, c) {
  if (typeof a == "number" && typeof b == "number" && typeof c == "number") {
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  }
}

const a = 12;
const b = 13;
const c = 55;

console.log(findLargest(a, b, c));
