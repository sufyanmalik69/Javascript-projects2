// // call-back hell

// // Nested callbacks stacked beolow one another forming a pyramid structure.
// // (pyramid of doom)

// // this style of programming becomes difficult to understand and manage.


// function getData(dataId,Getnextdata){ // important
//     setTimeout(() => {
//             console.log("Data:",dataId)
//             if(Getnextdata){
//                 Getnextdata();
//             }
//     }, 2000); // miliseconds 1000 = 1 second
    
//     }
    
//     getData(1,() =>{
//         console.log("Getting data2 ....")
//         getData(2, () =>{
//             console.log("Getting data3 ....")
//             getData(3 ,() =>{
//                 console.log("Getting data4 ....")
//                 getData(4);
//             });
//         });
//     });


// // Promises

// // Promise is for "eventual" completion of task.Is is an oebject in JS.
// // It is a solution to callback hell.


// let promise = new Promise((resolve,reject) => { // this obect is used has 3 states
//         console.log("Ordered successful")      // pending,resolve(promise completed)
//         // resolve("Item successfully ")         // rejected(broken promise).
//         // reject("An error occured.")          
//     })  
    
// // resolve function is created by js automatically it is called when the order
// // is fulfilled.

// // reject function is created by js automatically it is called when the promise
// // is broken or order is rejected.It throws an error.


// // .then() & .catch()

// const  getPromise = () => {
//     return new Promise((resolve,reject) => {
//             console.log("I am a promise.")
//             // resolve("Success.")
//          reject("failed.")
//     })
// }

// let promise = getPromise();
// promise.then((res) =>{ // The code under then is executed if the promise is rejected.
//         console.log("Promise fufilled.") // res returns the message in resolve.
// })


// promise.catch((err) =>{  // The code under catch is executed if the promise is fuldilled.
//         console.log("Promise broken.")  // err throws an error with a message in reject().
// })

// const getPromise  = () =>{
//     return new Promise((resolve,reject)=>{
//         for(let i = 1;i<=10;i++){
//             setTimeout(() =>{
//                 console.log("Data:",i )
//                 if(i < 10){               
//                  console.log("Fetchig Data",i+1," ....");}

//                 if( i === 10){
//                 resolve("Success.")}

//            } ,1000*i)

//         }
//     }
// )
// }

// let promise =  getPromise();
// promise.then((res) =>{
//     console.log("Promise report:",res)
// })
// .catch((err) =>{
//     console.log("Promise report:",err)
// })


// Practice Q1.Create a promise that resolves after 2 seconds with a message "Hello, world!".
// Create a promise that rejects with an error message "Something went wrong!" after 3 seconds.

// let promise = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         console.log("Hello, World!")
//     }, 2000)
//     resolve("Success.")
// })

// let promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject("Something went Wrong.")
//     },3000)
// }) // task completed



// Practice Q2.Create a sequence of promises where each one resolves with a message,
// but only after the previous one has resolved. For example, "First", "Second", "Third".
// let data = ["First" , "Second" , "Third"]
// let promise = () =>{
//     return new Promise((resolve,reject) => {
//         for(let i = 1; i <= data.length;i++){
//         setTimeout(()=> {
//             console.log(data[i-1])
//         },3000*i)
//     }
//     })
// }
// let pro = promise();

// Practice Q3.Create a promise that intentionally rejects and handle the error using .catch().
// Create a sequence of promises where one in the middle rejects. Ensure the error is caught and 
// handled properly.

// const Getpromise = () => {
//     return new Promise((resolve,reject) => {
//         reject("Failed")
//     })
// }

// let p = Getpromise();
// p.catch((err) => {
//     console.log("Promise status:",err)
// })


// part b
// const promise1 = () =>{
//     return new Promise((resolve,reject) => {
//         resolve("Success.")
//     })
// }
// const promise2 = () =>{
//     return new Promise((resolve,reject) => {
//         reject("Failed.")
//     })
// }
// const promise3 = () =>{
//     return new Promise((resolve,reject) => {
//         resolve("Success.")
//     })
// }

// let p2 = promise2()
// .catch((err)=> {
//     console.log("Promise status:",err)
// })


// arr = [1,2,3,4,5]
// const getPromise =  () => {
//     return new Promise((resolve,reject) => {
//         for(let i = 1;i<=arr.length;i++){
//             setTimeout(()=>{
//             console.log("Data",i)
//             console.log("fetching Data",i+1)
//             },3000*i)
//         }
//     })
// } 
// let p = getPromise();



