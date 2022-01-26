// TODO: Include packages needed for this application
const fileGenerator = require("./utils/generateMarkdown");
const fs = require("fs");
const inquier = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    },{
        type: "input",
        message: "Please Provide a short description explaining the what, why, and how of your project?",
        name: "description"
    },{
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
    },{
        type: "input",
        message: "Please State if others can contribute.",
        name: "contribute"
    },{
        type: "input",
        message: "Please state any test(s) are required",
        name: "test"
    },{
        type: "input",
        message: "Please state any test(s) rewuried(2)",
        name: "test2"
    },{
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices: [
            "APACHE 2.0",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
