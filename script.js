function pizzaOven(crust, sauce, cheeses, toppings){
    let order = {};
    order.crust = crust;
    order.sauce = sauce;
    order.cheeses = cheeses;
    order.toppings = toppings;
    return order;
}

function randomPizza(){
    let randPizza = {};
    let randNum = Math.random();
    let toppingList = ["Pepperoni",
    "Mushroom",
    "Extra cheese",
    "Sausage",
    "Onion",
    "Black olives",
    "Green pepper",
    "Fresh garlic"];
    let cheeseList = ["Feta", "Mozarella", "Cheddar"];
    let crustList = ["deep dish", "traditional"];
    let sauceList = ["traditional", "marinara"];

    let randCrustIndex = Math.floor(randNum * crustList.length);
    let randSauceIndex = Math.floor(randNum * sauceList.length);
    let randCheeseIndex = Math.floor(randNum * cheeseList.length);
    let randToppingIndex = Math.floor(randNum * toppingList.length);

    randPizza = pizzaOven(crustList[randCrustIndex], sauceList[randSauceIndex], [cheeseList[randCheeseIndex]], [toppingList[randToppingIndex]]);

    return randPizza;
}


let firstPizza = pizzaOven("deep dish", "traditional", ["mozarella"], ["pepperoni", "sausage"]);
console.log(firstPizza);
let secondPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(secondPizza);
let thirdPizza = pizzaOven("deep dish", "marinara", ["mozarella"], ["pepperoni"]);
console.log(thirdPizza);
let fourthPizza = pizzaOven("hand tossed", "traditional", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(fourthPizza);
let fifthPizza = randomPizza();
console.log(fifthPizza);