// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Include short description of your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['Apache 2.0', 'MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public 2.0', 'Unlicense', 'ISC'],
        default: [1],
    },    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What command should be run to run tests?',
        default: 'npm test',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does User need to know about using the repo?'
    },
    {
        type: 'confirm',
        name: 'has_credits',
        message: 'Any collaborators or third-party assets you want to include?'
    },
    {
        name: "credits",
        type: "input",
        message: "List your collaborators or third-party assets?",
        when: (responseObj) => responseObj.has_credits === true,
        filter: (value) => {
            return value.split(' ');
        },
      },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does User need to know about contributing to the repo?'
    },
    


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        err ? console.log(err) : console.log("Success README.md complete!");
    })
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responseObj) => {
        // console.log(responseObj);
        console.log(generateMarkdown(responseObj));
        
    });
    
 }

// Function call to initialize app
init();