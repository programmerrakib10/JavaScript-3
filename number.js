let num1 = 75;
let num2 = 15.57487562420;
let addition = num1 + num2;
console.log(addition)

// To Fixed
console.log("to fixed", addition. toFixed(3))
// Round Number 
let roundNumber = Math.round(addition);
console.log("Round Number", roundNumber);
// Ceil Number 
let ceilNumber = Math.ceil(addition);
console.log("Ceil Number", ceilNumber)
// Floor Number 
let floorNumber = Math.floor(addition);
console.log("Floor Number", floorNumber);

// Negative value k Positive korta hobe ABS er maddome 

let newValue = -75 ;
// abs
console.log("Absolute Value", Math.abs(newValue));
// kono decimal thakbe na 
let newNumber = 45.69846;
console.log("Parse Int", parseInt(newNumber));
console.log("Parse Float", parseFloat(newNumber));

// Random Dice Number 
let randomNumber = Math.floor(Math.random() * 7 +1);
console.log("Random Dice Number", randomNumber)

// 6 Digit OTP Generate
let otpGenerate = parseInt(Math.random() * 900000 + 100000);
console.log("Generate OTP", otpGenerate)

