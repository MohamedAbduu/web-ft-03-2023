
// class Student {

//     constructor(name){

//         this.name = name

//         console.log(`Good Morning ${this.name}`);
//     }

//     greeting(name){

//         return `Good morning ${name}`
//     }
// }

// let justin = new Student("Justin");
// let kelly = new Student("Kelly"); 
// let jordan = new Student("Jordan");
// let mo = new Student("Mohammad");
// let katie = new Student("Katie")


// console.log(justin.greeting("Justin"))
// console.log(kelly.greeting("Kelly"))
// console.log(jordan.greeting("Jordan"))
// console.log(mo.greeting("Mohammad"))
// console.log(katie.greeting("Katie"))

/**
 * Create a class called Rectangle that has the following properties: width and height. Add a method called area that calculates the area of the rectangle.
 */

// class Rectangle{
//     constructor(width, height){

//         this.width = width; 
//         this.height = height;

//     }

//     area(){

//         return this.width * this.height
//     }
// }


// let square = new Rectangle(4, 4);

// console.log(square.area());

// smallRec = new Rectangle(3, 6);

// console.log(smallRec.area());


// class Animal{  //base class or parent
//     constructor(){

//         console.log("This is my parent class");
//     }
// }


// class Dog extends Animal{

//     woof(){
//         console.log("Woof");
//     }
// }

// class Cat extends Animal {

//     meow(){
//         console.log("Meow");
//     }
// }

// let fido = new Dog()

// let pickle = new Cat()




// let firstName = String("Veronica")
// let lastName = "Lino"

// f

// console.log(firstName);


// class VeroString extends String {

//     constructor(word){

//         super(word)
//         this.word = word;
//     }

//     reverse(){

//         let revString = ""

//         for(let char of this.word){

//             revString = char + revString
//         }

//         return revString
//     }
// }

// let myName = new VeroString("Veronica")

// console.log(myName.reverse());

// console.log(myName.length);

// console.log(myName.toLocaleUpperCase());



// class WillSmith{

//     constructor(){
//         console.log("this is will smiths's constructor");
//     }

//     acting(){
//         console.log("Will smith kinda knows how to act");
//     }
// }

// class JaydenSmith extends WillSmith{

//     constructor(){
//         super()
//         console.log("this is jayden smith's contructor");
//     }

//     acting(){
//         console.log("Jayden Smith kinda knows how to act too");
//         super.acting()
//     }
// }

// let dad = new WillSmith()
// // dad.acting()

// let son = new JaydenSmith() 
// son.acting()


class Car {

    constructor(make, model, color){

        this.make = make; 
        this.model = model;
        this.color = color;
    }

    carDetails(){
        console.log(`This is ${this.color} ${this.make} ${this.model}`);
    }
}

class Hybrid extends Car {

    constructor(make, model, color, mpg){
        super(make, model, color)

        this.mpg = mpg
    }
    

    carType(){
        console.log("I am a hybrid car");
    }
}

class Electric extends Car {

    constructor(make, model, color ){
        super(make, model, color)
    }
    carType(){
        console.log("I am an electric car.");
    }
}

let prius = new Hybrid("toyota", "prius", "lime green", "55mpg")
prius.carDetails()
prius.carType()
console.log(prius.make);

let modelS = new Electric("tesla", "modle-s", "purple")
modelS.carDetails();
modelS.carType()