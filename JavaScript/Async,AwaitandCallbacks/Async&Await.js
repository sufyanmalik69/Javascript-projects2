// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject set up as parameters
// Everything after Await is placed in an event queue


// function mathsHW(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             mathsHWdone = true;
//             if(mathsHWdone === true){
//                 resolve("You've done the maths homework.")
//             }if(mathsHWdone === false){
//                 reject("Do your maths homework buddy.")
//             }
//         },1500)
//     })
// }
// function physicsHW(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             physicsHW = true;
//             if(physicsHW === true){
//                 resolve("You've done the Physics homework.")
//             }if(physicsHW === false){
//                 reject("Do your buddy.")
//             }
//         },1500)
//     })
// }function chemistryHW(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             chemistryHWdone = true;
//             if(chemistryHWdone === true){
//                 resolve("You've done the chemistry homework.")
//             }if(chemistryHWdone === false){
//                 reject("Do your buddy.")
//             }
//         },1500)
//     })
// }

// async function HW(){
//     try{
//     const mathsHWresult = await mathsHW();
//     console.log(mathsHWresult);

//     const physicsHWresult = await physicsHW();
//     console.log(physicsHWresult);
    
//     const chemistryHWresult = await chemistryHW();
//     console.log(chemistryHWresult);

//     console.log("You've done all your homework.")
// }
// catch(err) {
//     console.log(err)
// }
// console.log("Hello World!") // as the function is wating for the promise and then
//                             // printing hello world.
// }

// HW();