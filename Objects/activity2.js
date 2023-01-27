// Activity 2

const pet = {
    name: "Ruby",
    typeOfPet:"Dog",
    age: 9,
    colour: "Golden",
    eat: ()=>{
        console.log(`${pet.name} is eating.`)
    }, 
    drink:()=>{
        console.log(`${pet.name} is drinking.`)
    }
}

console.log(pet.eat());
console.log(pet.drink());