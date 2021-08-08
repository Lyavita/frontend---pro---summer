class Hamburger {
  static SIZE_SMALL = { name: 'small', price: 50, calories: 20 };
  static SIZE_MEDIUM = { name: 'medium', price: 75, calories: 30 };
  static SIZE_LARGE = { name: 'big', price: 100, calories: 40 };

  static TOPPING_CHEESE = { price: 10, calories: 20 };
  static TOPPING_SALAD = { price: 20, calories: 5 };
  static TOPPING_POTATO = { price: 15, calories: 10 };
  static TOPPING_SPICE = { price: 15, calories: 0 };
  static TOPPING_MAYO = { price: 20, calories: 5 };

  constructor(burgerSize) {
    this.price = burgerSize.price;
    this.calories = burgerSize.calories;
  }

  addTopping(toppingName) {
    this.price += toppingName.price;
    this.calories += toppingName.calories;
  }

  getPrice() {
    return this.price;
  }

  getCallories() {
    return this.calories;
  }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_SALAD);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());

  