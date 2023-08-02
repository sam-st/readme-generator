// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter project title: "
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description: "
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install this project: "
    },
    {
        type: "input",
        name: "usage",
        message: "How do you run this project: "
    },
    {
        type: "input",
        name: "contributions",
        message: "Enter contributions: "
    },
    {
        type: "input",
        name: "test",
        message: "Enter test guidelines: "
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license: ",
        choices: ['MIT', 'Apache', 'GPL', 'None']
    },
    {
        type: "input",
        name: "github",
        message: "Enter github account: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address: "
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const data = generateMarkdown(answers);
            writeToFile('README.md', data);
        })
}

// Function call to initialize app
init();
