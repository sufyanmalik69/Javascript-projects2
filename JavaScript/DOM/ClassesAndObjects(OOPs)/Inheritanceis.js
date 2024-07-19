// JS Inheritance

// as we learned in python inheritance is basically one class inheriting 
// properties and functions of another class.

// for example:

class person{
    eats (){
        console.log("Eats foods.")
    }

    sleeps (){
        console.log("Sleeps atleast 8 hours a day.")
    }
}

class Web_dev extends person{
    works (){
        console.log("Works 8 hours a day.")
    }
}
let Web = new Web_dev()
Web.eats()
Web.sleeps()
Web.works()