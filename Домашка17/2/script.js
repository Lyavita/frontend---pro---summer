function Hamburger(burgerSize) {

  this.price = burgerSize.price;
  this.calories = burgerSize.calories;

  this.addTopping = function (toppingName) {
    this.price += toppingName.price;
    this.calories += toppingName.calories;
  }

  this.getPrice = function () {
    return this.price;
  }

  this.getCallories = function () {
    return this.calories;
  }
}

Hamburger.SIZE_SMALL = { name: 'small', price: 50, calories: 20 };
Hamburger.SIZE_MEDIUM = { name: 'medium', price: 75, calories: 30 };
Hamburger.SIZE_LARGE = { name: 'big', price: 100, calories: 40 };

Hamburger.TOPPING_CHEESE = { price: 10, calories: 20 };
Hamburger.TOPPING_SALAD = { price: 20, calories: 5 };
Hamburger.TOPPING_POTATO = { price: 15, calories: 10 };
Hamburger.TOPPING_SPICE = { price: 15, calories: 0 };
Hamburger.TOPPING_MAYO = { price: 20, calories: 5 };

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_SALAD);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());