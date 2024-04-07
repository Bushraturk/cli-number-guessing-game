#! /usr/bin/env node
import inquirer from 'inquirer';
console.log("wellcome to CLI Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 5) ",
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratualtion ! you guess a correct number");
}
else {
    console.log("Sorry, you guess a wrong number");
}
