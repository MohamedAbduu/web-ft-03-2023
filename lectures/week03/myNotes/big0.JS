let arr = [5,6,3,4,2,4,10,5,9]
let target = 10
//looping, comparing, finding =10, printing. 
function twoSum(array, targetSum){
    
    for(let i=0; i<=arr.length; i++){
        let tar = target - arr[i];
        twoSum(arr, target)

    }

}


/**
 * the solution 
 * let arr = [3,5,-4,8,11,1,-1,6]
 * let cache = {
 * 3:3,
 * 5:5,
 * -4:-4
 * 8:8,
 * 1:1,
 * -1:-1,
 * 6:6
 * }
 */
// let arr = [3,5,-4,8,11,1,-1,6]




//OOP

let justin = {
    firstName : 'justin',
    city: 'phoenix'
}
kelly = {
    firstName : 'kelly',
    city: 'phoenix'
}
jorden = {
    firstName : 'jorden',
    city: 'phoenix'
}

class Student{

    constructor(firstName, city){
    this.firstName // this is a memory block
    this.city
    console.log('inside of my instructor');
}
    greeting(){  //instants method
        console.log('hello world');
    }
}
let jorden = new Student('jorden', 'nashville') //jorden is an object, an instant of the class student
// and called instructor

jorden.greeting()

class Person{
    constructor(name, surname, birthdate, address, telephone, email){
        this.name = name //instance veriable
        this.surname = surname
        this.birthdate = birthdate
        this.address = address
        this.telephone = telephone
        this.email = email
    }
    age(){
        let today = new Date()
        let age = today.getFullYear() - this.birthdate.getFullYear()
        if (today.getDate() < new Date(today.getFullYear(), this.birthdate.getMonth(), 
        this.birthdate.getDate() ).getDate()){
            age -= 1
        }
        return age
    }

    // age(){
    //     let today = new Date()
    //     let age today.getFullYear() - this.birthdate.getFullYear()
    // }
  }