const basket = {
  items: [],
  
  add(product) {
    this.items.push(product);
    product.quantity = 1;
    for (const item of this.items) {
      let indexOfNames = this.items.indexOf(item);
      if (item.name === product.name) {
        this.items.splice(indexOfNames, 1);
        // product.quantity = 1;
        console.log('it works?', this.items);
        return basket.items;
      };
    };
  },
};
    // for (const names of this.items) {
    //   if (names.name != product.name) {
    //     console.log('if?', names.name !== product.name);
    //     this.items.push(product);
    //   }
    // }


const fruits = [
  { name: 'apple', price: 50 },
  { name: 'grape', price: 70 },
  { name: 'lemon', price: 60 },
  { name: 'melon', price: 110 },
];
console.log(basket.add(fruits[0]));