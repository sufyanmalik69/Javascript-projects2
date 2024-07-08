// Function.

/* A function is a block of reusable code that perorms a
   specific task.Its is a mini program with-in your program
   that you call upon when ever you need tha task completed.
*/

// There are two type of funtions in JS:

// Built-in functions.
// user-defined functions.

// BUILT-IN FUNTIONS
/* These functions are the functions which are developed
    by the developers of javascript.These funxtions are
    present in the library files of JS.These functions are 
    also called Library functions.*/
// e.g console.log(),str.length,dt.typeof();

// USER DEFINED FUNTIONS.
/* Sometimes a programmer needs to perform a specific task
   that needs to be done multiple times and a built-in funtion
   is not available for that task.So, the programmer
   can deine a funtion by himslef. */

/* SYNTAX:
function func_name(args){
   statement(s);
}*/

function add(a,b,c){// this function adds three integers
    return a + b + c // return keyword returns a specific
                    // specfice value.
}


// this function returns the min and max value from an array.

function max_val(a){
    arr = a
    let max_val = 0,min_val = 0;
    for(let i of arr){
        if(i > max_val){
            max_val = i;
        } 
        
    }
    min_val = max_val
    for(let j of arr){
        if(j < min_val){
            min_val = j
        }
    }
    return `${max_val},${min_val}`;
}

// this function counts vowels in a string.

function count_vow(str){
    str = str
    vowels = ""
    for(let i of str){
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u" ){
            vowels += i
        }
    }
    console.log(vowels.length);

}


// Call back funtions.
/* A callback funtion is a function in js that can be passed as a parameter in a agrument of a function. */
// for example.
function add(a,b){
    return a + b;
}
function tostr(add){
    add = toString(add)
    return add
}


// For each Loop in Array.

// let arr= [1,2,3,34,4]

// arr.forEach(val =>{
//     console.log(val);
// });


// arr.forEach(function var_print(arr) { // it is a method that iterates over an array
//                                     // just like a for-of loop
//     let sum = 0;
//     console.log(arr**2)
// });

// let sum = 0;rr.forEach((val,Idx,arr) =>{ // you can also fetch index and whole arr
//                             // using this loop.
//     sum += val
//     console.log(`${Idx}:${arr}`)
// });        
// console.log(`${sum}`)


// IMPORTANT METHODS.

// Filter,map and reduce

// let arr= [1,2,3,34,4]

// let sum = arr.filter(x => x%2===0)
//     .map(y =>y**2)
//     .reduce((a,b) => a+b)

// console.log(sum);


// practice Q1.Create a list of strings and return a new list with each string 
//             converted to uppercase using map.

// let fruits = ["Apple","Mango","Banana","Grape","Blueberry"]

// fruits.map((str) => str.toUpperCase())
//     .forEach((n) => {
//         console.log(n)

// });


// Practice Q2.Create a list of strings and return a single concatenated 
//             string of all the strings using reduce

// let fruits = ["Apple","Mango","Banana","Grape","Blueberry"]

// console.log(fruits.reduce((a,b) =>a+b));

// Practice Q3.Create a list of strings and return a new list with only the strings 
//             that have a length greater than 5 using filter.


// let fruits = ["Apple","Mango","Banana","Grape","Blueberry"]

// console.log(fruits.filter(n => n.length > 5))

// Practice Q4.Create an array of strings and append an exclamation
//               mark to each string before printing it

// let fruits = ["Apple","Mango","Banana","Grape","Blueberry"]

// fruits.forEach(n => {
//     console.log(`${n+'!'}`)
// });