// Strings

// string is a sequence characters used to represent text.

//example:
var x = "Hello World!"


// BUILT-IN PROPERTIES //


// Length properties
// console.log(x.length);

// // String indices
// console.log(x[4])



// Template Literals
// var x = `This a template literal`// it starts and ends with (`) it is basically a string.

// advantages of template literals
// obj = {
//     Item: "pen",
//     price:10
// }
// console.log("This is a",obj.Item,"and, it costs Rs.",obj.price)    //
// console.log(`This is a ${obj.Item} and it costs Rs.${obj.price}`) // string interpolation
// console.log("This is a %s and it costs Rs.%d",obj.Item,obj.price)//



/* String methods */

// var x = "Hello World!"
// console.log(x.toUpperCase())// changes case to upper case
// console.log(x.toLowerCase())// changes case to lower case
// var x = "  Hello world!   "
// console.log(x.trim()) // trims/removes whitespaces( ) from start and edn of the string..

// var x = "0123456"
// console.log(x.slice(0,4)) // slice a string acc to the given index e.g str.slice(start,end)

// var x = "Hello "
// var y = "World!"
// console.log(x.concat(y)) // as per the name performs string concatenation.


// var x = "I am batman."
// console.log(x.replace("batman","homelander"))// used to replace values in a string.

// var x = "Hello, I am a human"
// console.log(x.charAt(10)) // used to find a the char at the given index.

// used string methods up above.

// str.toUpperCase()
// str.toLowerCase()
// str.trim()
// str.slice(start,end)
// str1.concat(str2)
// str.replace(val1,val2)
// str.charAt(index(e.g 0,1,2...))


// Practice Q1.Create a string sentence with the value "The quick brown fox jumps over the lazy dog".
// Find the length of the string.
// Convert the string to uppercase.
// Convert the string to lowercase.
// Extract the word "quick" from the string using the substring method

let str = "The quick brown fox jumps over the lazy dog"
console.log(str.length);
let upper_str = str.toUpperCase();
console.log(upper_str)
let lower_str = str.toLowerCase();
console.log(lower_str)

sub_str = str.substring(4,9)
console.log(sub_str)