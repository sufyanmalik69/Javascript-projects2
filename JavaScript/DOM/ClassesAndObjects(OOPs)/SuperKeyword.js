// Super Keyword.

//The super keyword is used to call the constructor of its parent class to access
// the parent's properties and methods.

class parent{
    constructor (name){
        console.log("I am the parent.")
        this.name = name
    }
}

class child extends parent{
    constructor(name){
        console.log("I am the child.")
        super(name); // using this keyword we can invoke the parent class constructor
    }           // from inside a child class's constuctor.
}

const c = new child()
