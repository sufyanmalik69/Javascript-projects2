// Classes in JS

//Class is program-code template for creating objects.
// THose bjects will have some state(variables) & some behaviour (functions) inside it.


class MyClass{ // Syntax
    constructor (name,age,id){
        console.log("Hello, MY name is Sufyan.") // contructor as we study in python
                                          // just runs itself after setting up an object.
        this.name = name; // this keyword just tells the compiler that we mean this class or object. 
        this.age = age;
        this.id = id;
    }


    student(){
        console.log("My name is ",this.name," my id number is ",this.id," and i am ",this.age,"of age.")
    }
}
let c = new MyClass("sufyan",18,"#9382") // new keyword is used to set a new object.
                    // new also initializes the constructor.and if it does not find any constructor in class,
                    // JS creates its own constructor automatically.

c.student()