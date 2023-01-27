// Activity 2

let numbers = [4, 25, 36, 81];

let map = numbers.map(Math.sqrt)
console.log(map)

numbers.shift()
console.log(numbers)

numbers.unshift(36)
console.log(numbers)

numbers.splice(2, 0, "Apple", "Grapes")
console.log(numbers)