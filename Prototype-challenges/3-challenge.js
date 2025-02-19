function Counter() {
  this.count = 0;
}
Counter.prototype.increment = function () {
  this.count += 1;
};
Counter.prototype.decrement = function () {
  this.count += -1;
};

const counter = new Counter();
counter.increment();
// counter.decrement()
console.log(counter.count);
