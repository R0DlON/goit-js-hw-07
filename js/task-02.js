const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
console.log(ingredients);

// Находим куда поместить
const needingPlace = document.querySelector("#ingredients");

// Перебор чз MAP
const itemEl = ingredients.map((item) => {
  // куда мы будем помещать перебранные елементы
  const items = document.createElement("li");

  // что в них будет
  items.textContent = item;
  return items;
});
console.log(itemEl);

// Помещаем перебранное в нужное место
needingPlace.append(...itemEl);
