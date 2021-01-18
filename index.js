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
        type: 'list',
        name: 'license',
        choices: ['APACHE','GNU','BSD', 'None'],
        default: 'None', 
    },
    {
        type: 'input',
        name: 'intallation instructions',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
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
function writeToFile(README, data) {
    fs.writeFile("README.md", generateMarkdown(data), (err) =>
              err ? console.log(err) : console.log('README.md successfully created'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating ReadMe...');
        console.log(inquirerResponses);
        //generateMarkdown(inquirerResponses);
        writeToFile('README', inquirerResponses)
    });
}

// Function call to initialize app
init();
