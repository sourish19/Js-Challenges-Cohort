function convertTempertature(value, scale) {
  switch (scale) {
    case "C":
      return `${value * (9 / 5) + 32}°F`;
    case "F":
      return `${(value - 32) * (5 / 9)}°C`;
  }
}

const value = 32;
const scale = "F";

console.log(convertTempertature(value, scale));
