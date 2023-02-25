// 19/41
// Напиши функцию getAllPropValues(propName) которая принимает один 
// параметр propName - имя (ключ) свойства. Функция должна вернуть массив 
// всех значений свойства с таким именем из каждого объекта в массиве products. 
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Почему этот код не работает? (изменена строка 22)

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const array = [];
// for (const product of products) {
//   if (Object.keys(product).includes(propName)) {
//     array.push(product["name"]);
//   }
// }
//   return array;
//   // Change code above this line
// }

// 20/41  почему нельзя записать 42 строку по типу 21 и наоборот?

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки

// for (const product of products) {
//   if (productName === product.name) {
   
//     return product.price * product.quantity;
//   };
// };
//   return 0;
//   // Пиши код выше этой строки
// };

// 30/41 вообще не понял

// Change code below this line

function addOverNum(x, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > x) {
    total += arg;
    console.log(total);
  }
    
}
  console.log(0);
  
}
addOverNum(12, 93, 28);
