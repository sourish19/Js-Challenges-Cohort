function Animal(name) {
  // this.name = name;
  Animal.prototype.makesound = function () {
    return "Some generic sound";
  };
}

const animal = new Animal("Leo");
console.log(typeof animal);
// console.log(animal.name);
console.log(animal.makesound());
