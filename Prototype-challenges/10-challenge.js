function Product(name, price, stock) {
  this.name = name;
  if (price > 0) {
    this.price = price;
  }
  if (stock > 0) {
    this.stock = stock;
  }
}

Product.prototype.applyDiscount = function (percent) {
  this.price = Math.round(this.price - this.price * (percent / 100));
};

Product.prototype.purchase = function (quantity) {
  if (this.stock >= quantity) {
    this.stock -= quantity;
    return this.stock
  } else {
    return "Not enough stock";
  }
};

const product = {
  name: "Laptop",
  price: 200,
  stock: 15,
};
const action = {
  type: "discount",
  percent: 25,
  quantity: 2,
};
const storeItem = new Product(product.name, product.price, product.stock);

if (action.type === "discount") {
  storeItem.applyDiscount(action.percent);
} else if (action.type === "purchase") {
  storeItem.purchase(action.quantity);
}

console.log(storeItem.price, storeItem.stock);
console.log(storeItem);
