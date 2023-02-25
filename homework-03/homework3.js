
//  1/41

// const apartment = {
//   imjUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   rprice: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// ========

// 2/42






// 41/41

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
    
//   },
  // =========
//   addPotion(newPotion) {
// for (let potion of this.potions) {
//  if (potion.name !== newPotion.name) {
// this.potions.push(newPotion);
// return this.potions;
//  }
// };
//  return `Error! Potion ${newPotion} is already in your inventory!`;
// },

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// ===========
// addPotion(newPotion) {
//   for (let potion of this.potions) {
//    if (potion.name === newPotion.name) {
//     return `Error! Potion ${newPotion.name} is already in your inventory!`;
//    }
//   };
//   this.potions.push(newPotion);
//   return this.potions;
//   },

  // removePotion(potionName) {
  //   for (let potion of this.potions) {
  //     if (potion.name === potionName) {
  //       const rem = this.potions.indexOf(potion);
  //       this.potions.splice(rem, 1);
  //       return this.potions;
  //     }
  //   }
  //   return `Potion ${potionName} is not in inventory!`;
  // },

//   updatePotionName(oldName, newName) {
//   for (let potion of this.potions) {
//   if (potion.name === oldName) {
//   potion.name = newName;
//   return this.potions;
//   }
//   }
//  return `Potion ${oldName} is not in inventory!`;
//  },
};
// console.log(atTheOldToad.getPotions(atTheOldToad.potions));
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })


// console.log(atTheOldToad.removePotion("Dragon breath"));
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// console.log(atTheOldToad.potions);


// задача Репеты "корзина товаров"

// //  * Працюємо з колекцією товарів у кошику:
// //  * - getItems()
// //  * - add(product)
// //  * - remove(productName)
// //  * - clear()
// //  * - countTotalPrice()
// //  * - increaseQuantity(productName)
// //  * - decreaseQuantity(productName)
// //  *
// //  */
const basket = {
  items: [],
  
  getItems() {
    return this.items;

  },
  
  add(product) {
    product.quantity = 0;
    console.log(product.quantity);
    for (const item of this.items){
        if (item.name === product.name) {
          product.quantity += 1;
        };
      this.items.push(product);
      product.quantity += 1;
    };
  },
}
// console.log(basket.add(apple));
//     product.quantity = 1;
     
//       let indexOfNames = this.items.indexOf(item);
//       if (item.name === product.name) {
//         this.items.splice(indexOfNames, 1);
//         // product.quantity = 1;
//         console.log('it works?', this.items);
//       }
//     }
    // for (const names of this.items) {
    //   if (names.name != product.name) {
    //     console.log('if?', names.name !== product.name);
    //     this.items.push(product);
    //   }
    // }
    // for (const item of this.items) {
    //   if (item.name === product.name) {
    //     item.quantity += 1;
    //     console.log('Збільшили кількість', item.quantity);
    //   }
    // }
  //   console.log(this.items);
  // },
  // remove(productName) {
  //   for (const names of this.items) {
  //     let indexOfNames = this.items.indexOf(names);
  //     if (names.name === productName) {
  //       this.items.splice(indexOfNames, 1);
  //     }
  //   }
  //   console.log(this.items);
  // },
  // clear() {
  //   this.items = [];
  //   return this.items;
  // },
  // countTotalPrice() {
  //   let totalPrice = 0;
  //   for (const numbers of this.items) {
  //     console.log('price:', numbers.price);
  //     totalPrice += numbers.price;
  //     console.log(totalPrice);
  //   }
  //   return totalPrice;
  // },
  // increaseQuantity(productName) {
  //   for (const item of this.items) {
  //     if (item.name === productName) {
  //       item.quantity += 1;
  //       console.log('+=quantity', item.quantity);
  //     }
  //   }
  // },
  // decreaseQuantity(productName) {
  //   for (const item of this.items) {
  //     if (item.name === productName) {
  //       item.quantity -= 1;
  //       console.log('-=quantity', item.quantity);
  //     }
  //   }
  // },
// };
const fruits = [
  { name: 'apple', price: 50 },
  { name: 'grape', price: 70 },
  { name: 'lemon', price: 60 },
  { name: 'melon', price: 110 },
];
// console.log(basket.getItems());
// basket.add(fruits[0]);
// basket.add(fruits[1]);
// basket.add(fruits[2]);
// basket.add(fruits[3]);
// basket.add(fruits[3]);
// console.log(basket.items);
// console.log(basket.remove(':яблоко:'));
// console.log(basket.clear());
// console.log(basket.countTotalPrice());
// console.log(basket.increaseQuantity(':виноград:'));
// console.log(basket.increaseQuantity(':виноград:'));
// console.log(basket.decreaseQuantity(':виноград:'));
//