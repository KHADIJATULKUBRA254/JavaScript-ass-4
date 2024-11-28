//-----Chapter#26-30-----//
//---Question#1
const positiveNumber = parseInt(prompt("Enter a positive integer:"));

console.log("Number:", positiveNumber);
console.log("Round off value:", Math.round(positiveNumber));
console.log("Floor value:", Math.floor(positiveNumber));
console.log("Ceil value:", Math.ceil(positiveNumber));

//---Question#2
const negativeNumber = parseFloat(prompt("Enter a negative floating-point number:"));

console.log("Number:", negativeNumber);
console.log("Round off value:", Math.round(negativeNumber));
console.log("Floor value:", Math.floor(negativeNumber));
console.log("Ceil value:", Math.ceil(negativeNumber));

//---Question#3
const anyNumber = parseFloat(prompt("Enter any number:"));

console.log("Absolute value:", Math.abs(anyNumber));

//---Question#4
const diceValue = Math.floor(Math.random() * 6) + 1; 
console.log("Dice roll value:", diceValue);

//---Question#5
const coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
console.log("Coin toss result:", coinToss);

//---Question#6
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100:", randomNumber);

//---Question#7
const userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs):");
const weight = parseFloat(userInput); // Extracts numeric value
console.log("Your weight is:", weight, "kgs");

//---Question#8
const secretNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = parseInt(prompt("Guess the secret number (1 to 10):"));

if (userGuess === secretNumber) {
    console.log("Congratulations! You guessed the secret number:", secretNumber);
} else {
    console.log("Try again! The secret number was:", secretNumber);
}


