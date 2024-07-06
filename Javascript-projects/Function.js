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

console.log(tostr(add(1,2)))