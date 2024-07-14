console.log("hello world");

// Integers/Numbers
// x = 99;
// console.log(x);

// String
// Name = "Sufyan Malik";
// console.log("My name is %s",Name);

// Null
// Gf = null;
// console.log(Gf);


// Undefined
// Future = undefined;
// console.log(Future);


// Boolean
// x = true;
// y = false;
// console.log(x,y);


/* VARIABLE RULES*/

// Variable names are case-sensitive javascript distuishes between "A" and "a".

// Only letters,numbers,underscore(_) and $ is allowed.

// Only letters,underscore(_) and $ can be the first character.

// Reserved cannot be variable names.



/* Let,Const and Var */

// Var : Variable can be re-declaed and updated. A global scope variable.

// let : Variable cannot be re-declared but can be updtaed. A block scope variable.

// const : Variable cannot be re-declared or updated.A block scope variable.

// let x = 99;
// const x =100; // its giving us error because let variable cannot be re-declared.

// var  y = 99;
// const y = 100; // no error occured ,hence var can be re-declared. 


// const z = 99;
// const z = 100;
// let z = 99; // hence cannot be re-clared and updated..


/* DATATYPES IN JAVASCRIPT*/
/*========================= */

// PRIMITIVE DATA TYPES.

// 1.Number
// 2.String
// 3.Boolean
// 4.Undefined
// 5.Null
// 6.BigInt
// 7.Symbol


var x = BigInt("1293");
console.log(x);

var x = Symbol("Hello World!");
console.log(x);


// NON-PRIMITIVE DATA TYPES.

// Objects(collection of values).

const Data = {
    name : "Sufyan Malik",
    class : "12th",
    age : 18,
    Marks : 737
}
console.log(Data);// to print whole object
console.log(Data.name); // to print key values
console.log(Data["name"]); // another way to print key values

// changing a value in an object
Data["age"] += 1
console.log(Data.age);