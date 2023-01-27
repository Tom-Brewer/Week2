// Activity 2

let topping = "Cheese"

switch(topping) {
    case "Ham":
        console.log(`${topping} is an important ingredient to my pizza`);
        break;
    case "Pineapple":
    case "Chicken":
    case "Pepperoni":
        console.log("I don't want that on my pizza!")
    default:
        console.log("Not for me.")
}