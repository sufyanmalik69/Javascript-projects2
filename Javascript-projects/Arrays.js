/* ARRAY */

// an array as we learned in python is a coolection of items.e.g [1,2,3,4,5]

let Names = ["Sufyan","Ali","Ahmed"]
for(let i of Names){
    console.log(i)
}
console.log(typeof(Names))// arra is an object it self.
console.log(Names.length)


// Array Indices
Names = ["Sufyan","Ali","Ahmed"]
console.log(Names[1])


// Looping over an array
Names = ["Sufyan","Ali","Ahmed"]
for(let i  = 0;i <= Names.length;i++){
    console.log(`My name is ${Names[i]}`)
}

// Practice Q.Find the average marks from an Array of marks

let marks = [30,59,85,63,94,34,56,46,88]
let total = 0;
for(let i of marks){
    total +=i
}
console.log(`The Average marks of the class is ${total/marks.length}`)


// Practice Q.For a given array with prices of 5 items -->[250,645,300,900,50]
//All items have an offer of 10% off on them.Change the array to store final price
// after applying the offer.
let items = [250,645,300,900,50]
for(let i of items){
console.log(`The price of item no.${items.indexOf(i)+1} after the offer will be ${i*0.1}`) // func arr.indexOf('rr.item') is used for 
                                                                                          // finding the index of a item.
}