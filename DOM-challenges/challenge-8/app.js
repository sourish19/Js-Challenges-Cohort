const addToCartBttn = document.querySelectorAll(".addToCardBttn");
const cartItems = document.querySelector("#cart-items");
const emptyCart = document.querySelector(".empty-cart");
const totalPrice = document.querySelector("#cart-total").childNodes[1];

const trackItems = [];
const trackPrice = [];
const subarr = [];

const cartItemfn = (item, price) => {
  const div = document.createElement("div");
  div.classList.add("cart-item");
  div.innerHTML = `
    <div>${item}</div>
    <div class="quantity-controls">
      <button class="sub-bttn">-</button>
      <span class="price">${price}</span>
      <button class="add-bttn">+</button>
      <button class="remove-bttn">Remove</button>
    </div>
  `;
  emptyCart.classList.toggle("hidden", true);
  cartItems.appendChild(div);
};

addToCartBttn.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    const item = e.target.closest(".product").children[1].innerText;
    const price = e.target.closest(".product").children[2].innerText;
    if (!trackItems.includes(item)) {
      trackPrice.push(Number(price.slice(1)));
      cartTotalAddFn();
      cartItemfn(item, price);
      trackItems.push(item);
    } else {
      alert("Item already added");
    }
  });
});

// remove
cartItems.addEventListener("click", (e) => {
  if (e.target.classList[0] === "remove-bttn") {
    const targetElement = e.target.closest(".cart-item");
    const item = targetElement.firstElementChild.innerHTML;
    const price = targetElement.querySelector(".price").innerHTML;
    removePrice(Number(price.slice(1)));

    const index = trackItems.indexOf(item);
    trackItems.splice(index, 1);
    e.target.closest(".cart-item").remove();
    if (trackItems.length < 1) {
      emptyCart.classList.toggle("hidden", false);
    }
  }
});

cartItems.addEventListener("click", (e) => {
  if (e.target.className == "add-bttn") {
    const quantityElement = e.target.closest(".quantity-controls");
    const priceElement = quantityElement.querySelector(".price");
    const price = priceElement.innerHTML;
    trackPrice.push(Number(price.slice(1)));
    showPrice(Number(price.slice(1)), priceElement);
    cartTotalAddFn();
  } else if (e.target.className == "sub-bttn") {
    const itemContainer = e.target.closest(".cart-item");
    const quantityElement = e.target.closest(".quantity-controls");
    const priceElement = quantityElement.querySelector(".price");
    const price = priceElement.innerHTML;
  }
});

const removePrice = (price) => {
  for (let i = trackPrice.length - 1; i >= 0; i--) {
    if (trackPrice[i] == price) {
      trackPrice.splice(i, 1);
    }
  }
  cartTotalAddFn();
};

const cartTotalAddFn = () => {
  // console.log(trackPrice);
  const total = trackPrice.reduce((a, b) => {
    return a + b;
  }, 0);
  totalPrice.innerHTML = `Total: $${total.toFixed(2)}`;
};

const showPrice = (price, priceElement) => {
  const itemPrice = priceElement.innerHTML;
  let fixedPrice = Number(itemPrice.slice(1));
  priceElement.innerHTML = `$${fixedPrice + price}`;
};
