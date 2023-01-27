// Activity 5

for(let i = 0 ; i < 6; i++){
    let num = Math.ceil(Math.random() * 30);

    if(num%7 == 0){
        console.log("{num} can be divided by 7")
    } else {
        console.log("{num} can not be divided by 7")
    }
}