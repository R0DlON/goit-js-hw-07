// находим нужный елемент
const categoriesEl = document.querySelector("#categories");
// находим в них детей.длинна
console.log(`В списке ${categoriesEl.children.length} категории.`);

// находим список по которому будем выводит категорию и кол-во элементов
const itemsEl = document.querySelectorAll(".item");

// перебираем через forEach
itemsEl.forEach((elem) => {
  console.log(
    `Категория: ${elem.firstElementChild.textContent}, Количество элементов: ${elem.lastElementChild.children.length}`
  );
});

// ---------
// Выбираем все h2 в li
// const titleOfItemsEl = document.querySelectorAll(".item h2");
// // Выбираем все ul в li
// const itemOfItemsEL = document.querySelectorAll(".item ul");

// выводим поочередно, так как мы выбирали всех детей в родителе
// console.log(
//   `Категория: ${titleOfItemsEl[0].textContent}, Количество элементов: ${itemOfItemsEL[0].children.length}`
// );
// console.log(
//   `Категория: ${titleOfItemsEl[1].textContent}, Количество элементов: ${itemOfItemsEL[1].children.length}`
// );
// console.log(
//   `Категория: ${titleOfItemsEl[2].textContent}, Количество элементов: ${itemOfItemsEL[2].children.length}`
// );
