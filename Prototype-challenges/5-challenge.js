function ShoppingCart() {
  // Initialize items property
  this.items = [];
}
ShoppingCart.prototype.addItem = function (price) {
  this.items.push(price);
};
ShoppingCart.prototype.getTotalPrice = function () {
  const total = this.items.reduce((acc, curVal) => acc + curVal, 0);
  return total;
};

const prices = [10,20,30];
const cart = new ShoppingCart();

for (let price of prices) {
  cart.addItem(price);
}

console.log(cart.items);
console.log(cart.getTotalPrice());
