#! /usr/bin/env node
import inquirer from "inquirer";
// Step 01
const answers = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: "Enter your first number"
    },
    { type: "number",
        name: "numberTwo",
        message: "Enter your second number"
    },
    { type: "list",
        name: "operator",
        message: "Enter your operator",
        choices: ["+", "-", "*", "/"] }
]);
// Step 02
const { numberOne, numberTwo, operator } = answers;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/": result = numberOne / numberTwo;
    default:
        console.log("Invalid operator");
}
console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
