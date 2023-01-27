// Activity 2

let orderCount = 0;

const takeOrder = (topping,topping2,size) => {
    console.log(`A ${size} pizza with ${topping} and ${topping2}`);
    orderCount++;
}

takeOrder("Pineapple", "Ham", "12 inch");
