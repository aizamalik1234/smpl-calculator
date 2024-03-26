#! /usr/bin/env node

import inquirer from "inquirer";
// printing a wellcom message
console.log("\n\tWellcome to \`maliksab\` - CLI smpl calclulator\n");

// asking questions for user throuhg inquirer

let answers = await inquirer.prompt([
    {message: "enter first Number", type: "number", name: "firstNumber"},
    {message: "enter second Number", type: "number", name: "secondNumber"},
    {
        message: "select one operator to perform operators",
        type: "list",
        name: "operators",
        choices: ["Additions", "Subtraction", "Multiplication","Division"],
    },
]);

console.log(answers);

// condtional statments If-Else
 if(answers.operators === "Additions"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operators === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operators === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber) 
}
else if (answers.operators === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}





