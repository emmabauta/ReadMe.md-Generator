// TODO: Include packages needed for this application
const fs = require('fs'); 
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github', 
        message: 'What is your GitHub username?',
    }, 
    {
        type: 'input', 
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
    },
    {
        type: 'input', 
        name: 'contributions',
        message: 'Would you like others to contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be used to run tests',
        default: 'npm test',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating ReadMe...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
        console.log(inquirerResponses);
    });
}

// Function call to initialize app
init();
