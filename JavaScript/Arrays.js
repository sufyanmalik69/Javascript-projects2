/* ARRAY */

// an array as we learned in python is a coolection of items.e.g [1,2,3,4,5]

// let Names = ["Sufyan","Ali","Ahmed"]
// for(let i of Names){
//     console.log(i)
// }
// console.log(typeof(Names))// arra is an object it self.
// console.log(Names.length)


// // Array Indices
// Names = ["Sufyan","Ali","Ahmed"]
// console.log(Names[1])


// Looping over an array
// Names = ["Sufyan","Ali","Ahmed"]
// for(let i  = 0;i <= Names.length;i++){
//     console.log(`My name is ${Names[i]}`)
// }

// Practice Q.Find the average marks from an Array of marks

// let marks = [30,59,85,63,94,34,56,46,88]
// let total = 0;
// for(let i of marks){
//     total +=i
// }
// console.log(`The Average marks of the class is ${total/marks.length}`)


// Practice Q.For a given array with prices of 5 items -->[250,645,300,900,50]
//All items have an offer of 10% off on them.Change the array to store final price
// after applying the offer.
// let items = [250,645,300,900,50]
// for(let i of items){
// console.log(`The price of item no.${items.indexOf(i)+1} after the offer will be ${i*0.1}`) // func arr.indexOf('rr.item') is used for 
//                                                                                           // finding the index of a item.
// }


// Array Methods

// let Items = ["pen","notebook","bag","sharpner","pencil","eraser"]
// Items.push("scale") // adds items at the end of an array
// console.log(Items)

//     Del_item = Items.pop(); // deletes the last from the array
// console.log(Items)          // also returns the deleted item
// console.log(Del_item)

// let Items = ["pen","notebook","bag","sharpner","pencil","eraser"]
// Items = Items.toString(); // converts an array to string
// console.log(Items)
// console.log(typeof(Items))

// let items2 = ["Bottle","Marker"]
// let ITEMS = Items.concat(items2) // Concats two arrays together.
// console.log(ITEMS)

// let Items = ["pen","notebook","bag","sharpner","pencil","eraser"]
// rev_Items = Items.reverse(); // reverses an array.
// console.log(rev_Items)

// Items.unshift("box"); // works like push method but adds the item at the start of an array.
// console.log(Items)

// del_item = Items.shift(); // works like pop method but deletes an item from the start of an array.
// console.log(del_item)   // and also returns the deleted item.
// console.log(Items)

// let Items = ["pen","notebook","bag","sharpner","pencil","eraser"]
// console.log(Items.slice(0,3)); // slices and returns an array.

// // e.g Items.splice(add,remove,replace)
// Items.splice(2/*StartIdx*/,2/*No.of items*/,"scale","Highlighter"/*and items to add*/)
// console.log(Items) // splice is used to replce,delete and add items in an array
// console.log(Items.length);


// Practice Q. Create an array to store companies ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

// Remove the first company form the array.

// remove uber and add Ola in its place.

// Add amazon at the end.


// let  comp = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
// let first_comp = comp.shift();
// console.log(comp);
// console.log(first_comp);

// comp.splice(1,1,"Ola");
// console.log(comp)

// comp.push("Amazon");
// console.log(comp);

// Exercise completed.


// Practice Q2.Create an array fruits with elements ["Apple", "Banana", "Cherry", "Date"].
// Remove the last element from the array.
// Add "Elderberry" and "Fig" at the end.
// Add "Grape" at the beginning.
// Remove the second element from the array

// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// removed_fruit  = fruits.pop();
// console.log(fruits)
// console.log(removed_fruit)

// fruits.push("Elderberry","Fig")
// console.log(fruits)

// fruits.unshift("Grape")
// console.log(fruits)

// fruits.splice(1,1)
// console.log(fruits)

// task completed.


// Practice Q3. Create an array colors with elements ["Red", "Green", "Blue", "Yellow", "Purple"].
// Replace "Green" with "Cyan".
// Insert "Orange" between "Blue" and "Yellow".
// Remove the first and the last elements.
// Reverse the order of the array.

// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"]
// colors.splice(1,1,"Cyan")
// console.log(colors);

// colors.splice(3,0,"Orange")
// console.log(colors);

// colors.pop();
// colors.shift();
// console.log(colors)

// colors.reverse()
// console.log(colors);

//task completed.