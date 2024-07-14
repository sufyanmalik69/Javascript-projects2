// Prototypes in js

// A javascript object is an entityhaving state and behavior (properties and methods).
// JS objects have a special property called prototype(Basically a prototype is reference).
// We can set prototype by using __proto__.


const calcTax = {  // An object with properties and function
    calcTax(){
        console.log("Tax rate is 10%.")
    }
}

const sufyan_salary =  { 
    print_salary(){
        console.log("50000")
    }
}

sufyan_salary.__proto__ = calcTax // we can set a prototype in an object.
                                 // its like an obeject inherits other objects
                                 // functions and properties.
sufyan_salary.print_salary()
sufyan_salary.calcTax()







