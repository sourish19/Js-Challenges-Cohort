function trafficLightAction(color) {
  color = color.toLowerCase();
  switch (color) {
    case "red":
      return "Stop";
    case "yellow":
      return "Slow Down";
    case "green":
      return "Go";
    default:
      return "Invalid Color";
  }
}

const color = "RED";

console.log(trafficLightAction(color));
