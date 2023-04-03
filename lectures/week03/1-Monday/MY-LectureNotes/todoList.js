const prompt = require('prompt-sync')({sigint: true});


// let todos = []
//prompt our user to
// 1 add a todo list item
    
// 2 update item list
   // add items change
// 3 remove todo..



// let item1 = parseInt(prompt("add a todo list item!"));
// let keepRunning = true;
// let todos = []

// while (keepRunning) {
//   let item2 = prompt("update item list");
//   if (item2.toLowerCase() === "yes") {
//     item2++;
//     console.log("updated");
//   } else if (item2.toLowerCase() === "no") {
//     console.log("Okay, we will update ur items!");
//     keepPlaying = false;
//   } else {
//     console.log("Sorry, I didn't understand your answer. Please type 'yes' or 'no'.");
//   }
// }









let todos = ["feed puppy"]  //how to store our information from our user 


console.log(todos);
/**
 * 
 * 1 list 1 0
 * 2 list 2
 * 
 */

// 1. prompt our user to 
//?    1. add a todo list item 
//          - prompt them for the item that they want to add
//          - take the item (string) push it to our list 
//          - want to display our list
//?    2. update a todo list item 
//          - print out a list of items by numbers for them to choose.
//          - caste chosen number to a integer
//          - integer - 1 to access array value
//          - prompt the user for the updated input
//          - todos[index - 1] = new value
//              
//?    3. remove a todo list item
//?    4. end program 


let menuChoice = 0;
let quit = 4;

while (menuChoice != quit){  //4 != 4

    //print a list of todolist items
    // 1. feed puppy

    for( let index = 0; index <todos.length; index++){
        console.log(`${index +1}. $[index]`);
    }

    menuChoice = Number(prompt(`Select a menu item
1. Add a todo list item 
2. Update a todo list item  
3. Remove a todo list item
4. Quit
    
`))

    switch(menuChoice){
        case 1:  //adding an item 
            break;
        case 2: //update 
            itemChoice = Number(prompt('enter'))
            arrIndex = itemChoice -1;
            userInput = prompt('which item u want to update')
            todos[arrIndex]

            break; 

        case 3: // remove 
            break;
        
        default:
            break;

    }


    
}

console.log("exited progarm, goodbye");









//array practice

let planets = ["Earth","Jupiter","Neptune","Mars","Saturn","Mercury","Uranus","Venus"]
// console.log(planets);

// // 3
// console.log([3]);

// console.log([4]);

// console.log([6]);

// console.log(Array.length);

// for(planets=1; planets<7; planets++ ){
//     console.log(planets);
// }


let loop = true;
while (loop < 7) {
    
      console.log("the planets are " + numCoins + "");

}