// let user = {
//   name: "Dan",
//   age: 1,
//   job: "IT",
// };
// console.log(user);
// console.log(user.name);

// // меняем значение ключа age
// user.age = 5;
// console.log(user.age);

// // добавляем ключ city
// user.city = "Москва";
// console.log(user);

// // удаляем ключ job
// delete user.job;
// console.log(user);

// // используем такую запись, когда название ключа лежит в переменной
// let key = "name";
// console.log(user[key]);

// let arr = [
//   {
//     name: "Anna",
//     description: "ученик в школе1",
//   },
//   {
//     name: "Kate",
//     description: "ученик в школе2",
//   },
//   {
//     name: "Igor",
//     description: "ученик в школе3",
//   },
// ];
// console.log(arr);

// const container = document.querySelector(".container");
// const temp = document.querySelector(".temp");

// arr.forEach((item) => {
//   insertItem(item);
// });

// function insertItem(item) {
//   const clone = temp.content.cloneNode(true);
//   const productName = clone.querySelector(".product__name");
//   const productDesc = clone.querySelector(".product__desc");
//   productName.innerHTML = item.name;
//   productDesc.innerHTML = item.description;
//   container.append(clone);
// }

const temp = document.querySelector(".temp");
const container = document.querySelector(".products");
const select = document.querySelector(".product__select");
const selectText = document.querySelector(".select");
const selectMenu = document.querySelector(".select__menu");
const selectItems = document.querySelectorAll(".select__item");
const btnPrice = document.querySelector(".btn__price");
const minPrice = document.querySelector(".minprice");
const maxPrice = document.querySelector(".maxprice");
const search = document.querySelector(".search");
const sort = document.querySelector(".product__sort");
const sortText = document.querySelector(".sort");
const sortMenu = document.querySelector(".sort__menu");
const sortItems = document.querySelectorAll(".sort__item");
const productCart = document.querySelector(".product__cart");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const modalContainer = document.querySelector(".modal__body");
const cartTemp = document.querySelector(".cart__temp");
const modalSum = document.querySelector(".modal__sum");
const modalClear = document.querySelector(".modal__clear");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const popupImg = document.querySelector(".popup__img");
const popupText = document.querySelector(".popup__text");
const popupName = document.querySelector(".popup__name");
const popupPrice = document.querySelector(".popup__price");
const popupBtn = document.querySelector(".popup__btn");
let cartArr = [];
// getItem получаем по названию ключа эл-т из хранилища
if (localStorage.getItem("cart")) {
  cartArr = JSON.parse(localStorage.getItem("cart"));
  // JSON.parse с помощью этой комманды приводим из строки обратно в массив
  randerCart(cartArr);
  cartSum(cartArr);
} else {
  cartArr = [];
}
// if условие нужно для проверки наличия внутри хранилища массива по ключу cart

search.oninput = searchProducts;
btnPrice.onclick = filterPriceProducts;
select.onclick = handelMenu;
sort.onclick = handelMenuSort;
// навешиваем онклик на выбор категории для открытия выпадающего списка
productCart.onclick = openCart;
modalClose.onclick = closeCart;
modalClear.onclick = clearCart;
popupClose.onclick = closePopup;

selectItems.forEach((item) => {
  // создаем цикл и на каждую категорию меню навешиваем клик
  item.onclick = (event) => {
    // навешиваем онклик на элемент если происходит событие
    event.stopPropagation();
    // останавливаем всплытие всех событий, что бы у родительских элементов не сработал клик
    selectText.innerHTML = item.innerHTML;
    // достаем содержимое элемента "Все категории" и меняем текс на выбранную категорию
    selectMenu.classList.add("hidden");
    // скрываем меню категорий
    const filterProducts = filterProductsCategory(
      // создаем переменную которая содержит в себе новый отфильтрованный массив
      products,
      selectText.innerHTML
    );
    if (selectText.innerHTML == "Все категории") {
      // передаем не отфильтрованный массив, тк категории "Все категории" нет
      randerProducts(products);
    } else {
      randerProducts(filterProducts);
    }
  };
});
sortItems.forEach((item) => {
  // создаем цикл и на каждую категорию меню навешиваем клик
  item.onclick = (event) => {
    // навешиваем онклик на элемент если происходит событие
    event.stopPropagation();
    const key = item.dataset.key;
    // ????
    const order = item.dataset.order;
    console.log(key);
    console.log(order);

    if (key !== "name") {
      if (order == "asc") {
        products.sort((a, b) => a[key] - b[key]);
      } else {
        products.sort((a, b) => b[key] - a[key]);
      }
    } else {
      if (order == "asc") {
        products.sort((a, b) => a[key].localeCompare(b[key]));
      } else {
        products.sort((a, b) => b[key].localeCompare(a[key]));
      }
    }
    randerProducts(products);

    // останавливаем всплытие всех событий, что бы у родительских элементов не сработал клик
    sortText.innerHTML = item.innerHTML;
    // достаем содержимое элемента "Все категории" и меняем текс на выбранную категорию
    sortMenu.classList.add("hidden");
    // скрываем меню категорий
  };
});
function handelMenu() {
  selectMenu.classList.toggle("hidden");
  // открываем или закрывваем выпадающий список
}
function handelMenuSort() {
  sortMenu.classList.toggle("hidden");
  // открываем или закрывваем выпадающий список
}

function randerProducts(arr) {
  container.innerHTML = null;
  // для подчищения старого содержимого контейнера
  arr.forEach((item) => {
    const clone = temp.content.cloneNode(true);
    const stars = clone.querySelectorAll(".star");
    const img = clone.querySelector(".img");
    const name = clone.querySelector(".product__name");
    const price = clone.querySelector(".price");
    const productBtn = clone.querySelector(".product__btn");
    productBtn.onclick = () => addToCart(item);
    img.onclick = () => openPopup(item);
    // стрелочная ф-ция нужна для того, чтобы передать параметры ф-ции addToCard, если ф-ция с параметрами то стрелочная, иначе просто название ф-ции
    img.src = item.img;
    name.innerHTML = item.name;
    price.innerHTML = item.price.toLocaleString();
    stars.forEach((star, index) => {
      if (index < item.rate) {
        star.classList.add("star-check");
      }
    });
    container.append(clone);
  });
}

function randerCart(arr) {
  modalContainer.innerHTML = null;
  // для подчищения старого содержимого контейнера
  arr.forEach((item, index) => {
    const clone = cartTemp.content.cloneNode(true);
    const img = clone.querySelector(".modal__img");
    const name = clone.querySelector(".modal__name");
    const price = clone.querySelector(".modal__price");
    const delBtn = clone.querySelector(".modal__del");
    delBtn.onclick = () => deleteItem(index);
    // стрелочная ф-ция нужна для того, чтобы передать параметры ф-ции addToCard, если ф-ция с параметрами то стрелочная, иначе просто название ф-ции
    img.src = item.img;
    name.innerHTML = item.name;
    price.innerHTML = item.price.toLocaleString();

    modalContainer.append(clone);
  });
}

function deleteItem(index) {
  cartArr = cartArr.filter((item, i) => i !== index);
  randerCart(cartArr);
  cartSum(cartArr);
  saveCart();
}

function addToCart(item) {
  cartArr.push(item);
  console.log(cartArr);
  saveCart();
}

randerProducts(products);
// написать функцию filterProductsCategory которая на вход принимает название категории и оставляет продукты только из этой категории

function filterProductsCategory(arr, category) {
  return arr.filter(
    (item) => item.category.toLowerCase() == category.toLowerCase()
  );
}
// приводим к одному регистру что бы сравнение было верным
function filterPriceProducts() {
  const min = Number(minPrice.value);
  const max = Number(maxPrice.value);
  const filterPrice = products.filter(
    (item) => item.price >= min && item.price <= max
  );
  // заводим переменную в которой отфильтровывыются продукты по максимальной и минимальной цене
  randerProducts(filterPrice);
}

function searchProducts() {
  const value = search.value;
  const filterSearch = products.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );
  // создаем функцию в которой при вводе в поле ввода названия продукта фильтруются продукты содержащие подстроку поиска в названии
  randerProducts(filterSearch);
}

function openCart() {
  modal.classList.remove("hidden");
  randerCart(cartArr);
  cartSum(cartArr);
}
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // setItem используется для сохранения (cart - это ключ по которому хранятся данные,JSON.stringify - преобразовывает в строку массив(формат JSON) )
}
// localStorage это браузерное хранилище данных в формате строки
function openPopup(item) {
  popup.classList.remove("hidden");
  popupImg.src = item.img;
  popupName.innerHTML = item.name;
  popupText.innerHTML = item.description;
  popupPrice.innerHTML = item.price.toLocaleString();
  popupBtn.onclick = () => addToCart(item);
}
function closePopup() {
  popup.classList.add("hidden");
}
function closeCart() {
  modal.classList.add("hidden");
}
function clearCart() {
  if (confirm("Вы уверены, что хотите очистить корзину?")) {
    cartArr = [];
    randerCart(cartArr);
    cartSum(cartArr);
    saveCart();
  }
}
function cartSum(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum += item.price;
  });
  modalSum.innerHTML = sum.toLocaleString();
}
