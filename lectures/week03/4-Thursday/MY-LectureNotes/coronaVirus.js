
let covidData = require('./data');

// 
//  * Print the follwoing for each state and territory
//  * 
//  * 1. State Name 
// for(let  i=0; i<covidData.length; i++){
//     let corState = covidData[i]
//     console.log(corState.state);
// }
// // 
// //  * 2. State Population 
// for(let  i=0; i<covidData.length; i++){
//     let corState = covidData[i]
//     console.log(corState.population);
// }
//  * 3. Number of Cases 

//  * 4. Number of Deaths
//  * 
//  * 
//  * Find the following 
//  * 1. Total (sum) of all the cases for each state and territory
// for(let  i=0; i<covidData.length; i++){
//     let sumCases = covidData[i].cases
//     sum += sumCases
// }
// console.log(sum);
//  * 2. Which state or territory had the highest number of cases 
let sta = covidData[0].state
let glbMaxNum = 0;
for(let  i=0; i<covidData.length; i++){
    let maxNum = covidData[i].cases
    if( maxNum>glbMaxNum){
          glbMaxNum = maxNum ;
          sta = covidData[i].state

        
    }
}
console.log(sta);
//  * 3. Which state or territory had the higheest number of deaths
//  * 
// 