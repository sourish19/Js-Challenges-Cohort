function Animal(name) {
  this.name = name;
  Animal.prototype.makesound = function () {
    return "Some generic sound";
  };
}

const animal = new Animal("Leo");
console.log(animal.makesound());
