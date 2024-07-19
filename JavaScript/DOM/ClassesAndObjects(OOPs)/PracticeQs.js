// Q1. You are creating a website for your college.Create a class User with 2
// properties, name & email.It also has a method called viewData() that allows
// user to view website data.

// const data = "IMPORTANT DATA."
// class user{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("Data = ",data)
//     }
// }

// let student1 = new user("sufyan","Sufyanmaliksaifi@gmail.com");
// let student2 = new user("ahmed","ahmedmalik@gmail.com");

// student1.viewData();
// student2.viewData();


// Practice Q2.Define a Car class with a constructor that takes make, model, 
// and year. Add a method getDetails that returns a string with these details.

class car{
    constructor(make,model,year){
        this.make = make
        this.model = model 
        this.year = year
    }
    viewdetails(){
        console.log("\n\t\tCAR DETAILS\
                    \n\t\t=========== \
                    \nMAKE:",this.make,
                    "\nMODEL:",this.model,
                    "\nYEAR:",this.year)
    }
    startEngine(){
        console.log(`${this.make} ${this.model} ready to go sir!!!`)
    }
    compareCars(){
        let car1_name = this.make
        let car2_name = this.make
        let car1_model = this.model
        let car2_model = this.model
        let car1_year = this.year
        let car2_year = this.year
        if(car1_year > car2_year){
            console.log(`${car2_name} is newer.`)
        }if(car2_year > car1_year){
            console.log(`${car1_name} is newer.`)
        }
    }

}

let car1 = new car("Audi","A3",2014);
// car1.viewdetails();
car1.startEngine();
let car2 = new car("Bugatti","Veyron",2015)
// car2.viewdetails();
car2.startEngine();
car1.compareCars();