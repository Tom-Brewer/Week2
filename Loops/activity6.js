// Activity 6

let tomsFollowers = ["Chris", "Matthew", "John", "Jess"]
let chrisFollowers = ["Robert", "Lee", "Tom", "John"]

for(let i = 0; i < tomsFollowers.length; i++){
    for(let j = 0; j < chrisFollowers.length; j++){
        if(tomsFollowers[i] === chrisFollowers[j]){
            console.log(chrisFollowers[j])
        }
    }
}