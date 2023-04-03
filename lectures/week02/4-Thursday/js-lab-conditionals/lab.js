//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/

// const firstName = prompt("Siapa nama depanmu?");
// const lastName = prompt("Siapa nama belakangmu?");
// const language = prompt("Bisa berbahasa apa?");
 
// const user = {
//    name: {
//        first: firstName,
//        last: lastName,
//    },
//    language: language
// };
 
// if (user.language === "English") {
//    alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
// } else if (user.language === "French") {
//    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
// } else if (user.language === "Japanese") {
//    alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
// } else {
//    alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
// }


// let text = prompt("What's your name?");
// if (text !== "") {
//   alert(`Your name is: ${text}`);
// } else {
//   alert(`Name cannot be empty`)
// }



//  2. Write a program that prompts the user for a number and determines if it is even or odd.

// const isVowel = char => /[aeiou]/i.test(char);

// let creditScore = 850;

// if(creditScore >= 800 && creditScore<= 850){
//   console.log(object)
// }
// else if (creditScore >= 740 && creditScore<= 799){
//   console.log("your score is great");
// }
// else if (creditScore >= 670 && creditScore<= 739){
//   console.log("your score is good");
// }
// else if (creditScore >= 580 && creditScore<= 769){
//   console.log(object);
// }
// else if (creditScore >= 480 && creditScore<= 579){
//   console.log(object);
// }

// let day = 0;

// switch(day){
//   case 0:
//     console.log("sunday")
//     break;
//   case 1:
//     console.log("monday")
//     break;
//   case 2:
//     console.log("tuesday")
//     break;
//   default:
//     console.log(object);
// }

// if(day == 0){
//   console.log('sunday');
// }
// if(day == 1){
//   console.log('monday');
// }
// if(day == 2){
//   console.log('tuesday');
// }


// let number = Number('prompt pick a number:')

// let num = prompt("Enter a number:");
// if (num % 3 == 0) {
//     console.log(num + " is a multiple of 3.");
// } else {
//     console.log(num + " is not a multiple of 3.");
// }


let age = Number(prompt("Enter your age:"));
if (age >= 65) {
    console.log("You are eligible for a senior discount!");
} else {
    console.log("Sorry, you are not eligible for a senior discount.");
}
