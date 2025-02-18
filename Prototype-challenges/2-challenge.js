function Robot(name, batteryLevel) {
  this.name = name;
  this.batteryLevel = batteryLevel;
  Robot.prototype.charge = function () {
    if (batteryLevel <= 80) {
      this.batteryLevel += 20;
    } else {
      this.batteryLevel = 100;
    }
  };
}

const robot = new Robot("robo1", 10);
robot.charge();
console.log(robot.batteryLevel);
