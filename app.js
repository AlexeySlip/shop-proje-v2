// add to cart
let productsCountEl = document.querySelector(".products-counts")
let addToCart = document.querySelectorAll(".button-add")

addToCart.forEach((item) =>
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1
  }));

// change like buttons state
let likeBtns = document.querySelectorAll(".like");

likeBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    btn.classList.toggle("liked");
  }));

// modal

let moreDatailsBtns = document.querySelectorAll(".button-more");
let modal = document.querySelector(".modal")
let btnClose = document.querySelector(".btn-close")

moreDatailsBtns.forEach(item => item.addEventListener("click", openModal))

btnClose.addEventListener("click", closeModal)

function openModal() {
  modal.classList.remove("hide");
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal()
  }
})

function showModalByScroll() {
  if (window.pageYOffset >= document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);

// // change product quantity
// let decrementBtns = document.querySelectorAll(".decrement-button");
// let incrementBtns = document.querySelectorAll(".increment-button");
// let quantityInput = document.querySelectorAll(".product-quantity input");
// let minCount = 1;
// let maxCount = 5;
// let currentValue = +quantityInput.value

// function toggleButtonsState(count, decrementBtn, incrementBtn) {
//   decrementBtn.disabled = count <= minCount;
//   incrementBtn.disabled = count >= maxCount;
// }

// quantityInput.forEach((item, i) =>
//   toggleButtonsState(item.value, decrementBtns[i], incrementBtns[i])
// );

// incrementBtns.forEach((item, i) =>
//   item.addEventListener("click", function () {
//     let currentValue = +quantityInput[i].value;
//     let nextValue = currentValue + 1;
//     quantityInput[i].value = nextValue;
//     toggleButtonsState(nextValue, decrementBtns[i], item);
//   })
// );

// decrementBtns.forEach((item, i) =>
//   item.addEventListener("click", function () {
//     let currentValue = +quantityInput[i].value;
//     let nextValue = currentValue - 1;
//     quantityInput[i].value = nextValue;
//     toggleButtonsState(nextValue, item, incrementBtns[i]);
//   })
// );

// slider slick

$(".slider-block").slick({
  dots: true
});

// let sumValue
// for(i=0;i<=quantityInput[i];i++){
// sumValue +=  +quantityInput.value[i]

// }
// console.log(quantityInput.value)
// quantityInput.forEach((quantityInput.value,i)=>{
// let sumValue = sumValue + quantityInput.value[i];

// }
// )

// Counter function constructor
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField, minCount = 1, maxCount = 5) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,

  };
  this.toggleButtonsState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;
  };
  this.toggleButtonsState()
  this.increment = function () {
    let currentValue = +this.domRefs.inputField.value;
    let nextValue = currentValue + 1;
    this.domRefs.inputField.value = nextValue;
    this.toggleButtonsState();
  };

  this.decrement = function () {
    let currentValue = +this.domRefs.inputField.value;
    let nextValue = currentValue - 1;
    this.domRefs.inputField.value = nextValue;
    this.toggleButtonsState();
  };

  // this.domRefs.incrementBtn.addEventListener("click", this.increment);
  // this.domRefs.decrementBtn.addEventListener("click", this.decrement);

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}


// const counter = new Counter(incrementBtns, decrementBtns, quantityInput);

// console.log(counter);

let counters = []

quantityInput.forEach(
  (countItem, i) =>
  (counters[i] = new Counter(incrementBtns[i], decrementBtns[i], countItem))
);

// Counter function constructor
// let decrementBtns = document.querySelectorAll(".decrement-button")[0];
// let incrementBtns = document.querySelectorAll(".increment-button")[0];
// let quantityInput = document.querySelectorAll(".product-quantity input")[0];

// function Car(year, model, color) {
//   this.year = year;
//   this.model = model;
//   this.color = color;
// }

// let audi = new Car("2014", "A4", "black");
// let audiA5 = new Car("2014", "A5", "black");
// console.log(audi);
// console.log(audiA5);

// function Calculator(a, b) {
//   this.a = a;
//   this.b = b;
//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calc1 = new Calculator(5, 15);
// let calc2 = new Calculator(15, 15);

// console.log(calc2.sum());
// console.log(calc2.mul());

// function Counter(incrementBtn, decrementBtn, inputField) {
//   this.domRefs = {
//     incrementBtn,
//     decrementBtn,
//     inputField,
//   };
// }

// const counter = new Counter(incrementBtns, decrementBtns, quantityInput);

// console.log(counter);
