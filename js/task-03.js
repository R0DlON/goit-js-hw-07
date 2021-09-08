const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listImage = images
  .map((image) => {
    return `<li><img src="${image.url}" alt="${image.alt}"></li>`;
  })
  .join("");

const gallery = document
  .getElementById("gallery")
  .insertAdjacentHTML("afterbegin", listImage);

// мои попытки
// // находим куда нужно поместить
// const needingPlace = document.querySelector("#gallery");
// console.log(needingPlace);

// const makeLiImg = images.map((image) => {
//   const li = document.createElement("li");

//   const img = document.createElement("img");
//   img.url = image.url;
//   img.alt = image.alt;

//   li.appendChild(img);
//   // через "appendChild" - работает
//   // return needingPlace.appendChild(li);

//   return needingPlace.insertAdjacentHTML("afterbegin", li);
// });
// // В этом случае подставляется url, alt только от первого <img>
// // needingPlace.insertAdjacentHTML(
// //   "afterbegin",
// //   '<li><img url="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt="White and Black Long Fur Cat"</li>',
// //   '<li><img url="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt="Orange and White Koi Fish Near Yellow Koi Fish"</li>',
// //   '<li><img url="https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt="Group of Horses Running"</li>'
// // );
