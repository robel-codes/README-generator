// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your repository?(required)",
        name: "title",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('A title of repository is required.');
                return false;
            };
        }
    },{
        type: "input",
        message: "Please Provide a short description explaining the what, why, and how of your project?(required)",
        name: "description",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('A description of the project is required.');
                return false;
            };
        }
    },{
        type: "input",
        message: "What is your GitHub user name?(required)",
        name: "userName",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('A GitHub user name is required.');
                return false;
            };
        }
    },{
        type: "input",
        message: "What is your email?(required)",
        name: "email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Email address is required.');
                return false;
            };
        }
    },{
        type: "input",
        message:"what are the steps required to install your project?if applicable",
        name:"installation",
        filter(val) {
            if (val === ''){
                val = 'No installation is required'
                return val;
            }else return val;
        }
    },{
        type: "input",
        message: "Provide instruction for use?(required)",
        name: "usage",
        validate: UsageInput => {
            if (UsageInput) {
                return true;
            } else {
                console.log('Please provide usage information for the project');
                return false;
            };
        }
    },{
        type: "input",
        message: "Please State if others can contribute.(required)",
        name: "contribute",
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please state the contibution information for the project');
                return false;
            };
        }
    },{
        type: "input",
        message: "Please state any test that are required(required)",
        name: "test",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('please state test instructions for the project ');
                return false;
            };
        }
    },{
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.(required)",
        choices: [
            "APACHE 2.0",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('App License is required, if not please select None.');
                return false;
            };
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Readme Created!'
            });
            console.log("Readme.md Created!");
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('./assets/README.md', generateMarkdown(answers))});
}


// Function call to initialize app
init();
