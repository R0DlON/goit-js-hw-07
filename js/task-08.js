const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];
// Пиши код ниже этой строки

const sortedByAuthorName = books
  .filter((book) => book.author)
  .sort((a, b) => a.localeCompare(b));
console.log(sortedByAuthorName);

const sortedByReversedAuthorName = books
  .filter((book) => {
    return book.author;
  })
  .sort((a, b) => a - b);
console.log(sortedByReversedAuthorName);
const sortedByAscendingRating = books
  .filter((book) => book.rating)
  .sort((a, b) => b - a);
console.log(sortedByAscendingRating);
const sortedByDescentingRating = books
  .filter((book) => book.rating)
  .sort((a, b) => a - b);
console.log(sortedByDescentingRating);

const users = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: false },
  { name: "Ajax", isActive: true },
  { name: "Chelsey", isActive: false },
];

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно true, то текущий элемент (user) будет записан в результирующий массив.
const activeUsers = users.filter((user) => user.isActive);
console.log(activeUsers);

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно false, то текущий элемент (user) будет записан в результирующий массив.
const inactiveUsers = users.filter((user) => !user.isActive);
console.log(inactiveUsers);
