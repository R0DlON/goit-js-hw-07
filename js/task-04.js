const valueEl = document.querySelector("#value");

const x = 0;
const increment = document.querySelector("#counter.datased.increment");
const decrement = document.querySelector("#counter.datased.decrement");
console.log(increment);
increment.addEventListener("click", function () {
  // this function is executed whenever the user clicks the increment button
  valueEl.textContent = x += 1;
});

decrement.addEventListener("click", function () {
  // this function is executed whenever the user clicks the decrement button
  span.textContent = x -= 1;
});
