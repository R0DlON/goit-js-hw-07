const valueEl = document.querySelector("#value");
let value = 0;
console.log(valueEl.textContent);

const container = document.querySelectorAll("#counter button");
console.log(container);

const decrement = container[0];
console.log(decrement);

const increment = container[1];
console.log(increment);

increment.addEventListener("click", function () {
  valueEl.textContent = value += 1;
});

decrement.addEventListener("click", function () {
  // this function is executed whenever the user clicks the decrement button
  valueEl.textContent = value -= 1;
});
