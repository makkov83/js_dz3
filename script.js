1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

let nums = 0;
while (nums <= 100) {
    let check = true;
    for (let i = 2; i < nums; i++) {
        if (nums % i === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(nums);
    nums++;
}

2. С этого урока начинаем работать с функционалом интернет - магазина.Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

let korz = [
    {
        product: "apple",
        price: getNumber(10, 20)
    },
    {
        product: "phone",
        price: getNumber(10, 20)
    },
    {
        product: "pc",
        price: getNumber(10, 20)
    },
    {
        product: "microphone",
        price: getNumber(10, 20)
    }
];
let korzPrice = 0;
for (let product of korz) {
    korzPrice += product.price;
    console.log("Продукт " + product.product + " цена: " + product.price);
}

console.log("Цена корзины: " + korzPrice + " у.е.");


3. Товары в корзине хранятся в массиве.Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


function countBasketPrice(korz) {
    let funkorzPrice = 0;
    for (let product of korz) {
        funKorzPrice += prod.price;
    }
    return funKorzPrice;
}

console.log("Цена корзины: " + countKorzPrice(korz) + " у.е.");


