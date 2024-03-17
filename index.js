import inquirer from "inquirer";
//Asking questions from users through inquirer
let answers = await inquirer.prompt([
    {
        message: "Enter your weight in kilograms",
        type: "number",
        name: "weight",
    },
    {
        message: "Enter your height in meters",
        type: "number",
        name: "height",
    }
]);
console.log(answers);
let bmi = answers.weight / (answers.height * answers.height);
console.log("Your BMI is: ", bmi);
