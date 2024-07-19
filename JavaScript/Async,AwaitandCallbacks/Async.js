// Sync in JS

// SYNCHRONOUS //

// Synchronous means the code run in a particular sequence of instructions given
// in the program, Each instructions waits for the previous instruction to 
// complete its exeution.

//for example:

// console.log("code 1")
// console.log("code 2")
// console.log("code 3")

// ASYNCHRONOUS //

// Due to synchronous programmming, something imp instructions get blocked due
// to some previous instructions, which causes a delay in the UI.Asynchronous
// code execution allows to execute allows to execute next instructions
// immediately and doesn't block the flow.


// for example:

// console.log("code 1")
// console.log("code 2")
// setTimeout(() => {
//     console.log("code 3");
// },3000)
// console.log("code 4")


// call-back hell

// Nested callbacks stacked beolow one another forming a pyramid structure.
// (pyramid of doom)

// this style of programming becomes difficult to understand and manage.


function getData(dataId,Getnextdata){ // important
setTimeout(() => {
        console.log("Data:",dataId)
        if(Getnextdata){
            Getnextdata();
        }
}, 2000); // miliseconds 1000 = 1 second

}

getData(1,() =>{
    console.log("Getting data2 ....")
    getData(2, () =>{
        console.log("Getting data3 ....")
        getData(3 ,() =>{
            console.log("Getting data4 ....")
            getData(4);
        });
    });
});
