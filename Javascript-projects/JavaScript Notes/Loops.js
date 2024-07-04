// LOOPS

//do-while loop

// let x=1;
// do{
//     console.log("I am batman.")
//     x++;
    
// }while(x<=10);


// while loop
// let y = 1;
// while(y<=10){
//     console.log("I am Homelander.");
//     y++;
// }

// for loop
// let z;
// for(z=1;z<=10;z++){
//     console.log("I am Soldier Boy.")
// }

// for-of loop
// x = "Hello world!" // is used to iterate strings
// for(let i of x){ // <--works as for loop in python for e.g. for i in x:
//     console.log(i)
// }


// for-in loop 
// student = {
//     Name:"Sufyan malik",
//     age : 18,
//     City: "karachi",
//     Status: true
// }

// for(let i in student)[ // this loop is used to iterate arrays and objects(dicts).
//     console.log("key =",i,"\nvalue =",student[i])
// ]


// print odd between 1 to 100
// let x = 1;
// while(x<=100){
//     if(x%2 === 1){
//         console.log(x)
//     }
//     x++
// }

const prompt = require("prompt-sync")();

// make number guesser game
let number = 35;

while(true){
    let u_guess = prompt("Enter your guess: ");
    if(u_guess == number){
        console.log("Congratulations, You have guessed it right.")
        break
    }
    if(u_guess < number){
        console.log("A bit higher.")
    }
    if(u_guess > number){
        console.log("A it lower.")
    
    }


}