const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown")
const api = require('./utils/api')
const fs = require("fs");
// const fsRead = fs.readFile()
// const fsWrite = fs.writeFile()


const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "github",
        message: `What is your github username?`,
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project",
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project.",
    },
    {
        type: "list",
        name: "license",
        message: "What lincense are you using?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What method is required for installation?",
        default: "npm i" 
    },
    {
        type: "input",
        name: "tests",
        message: "What method is required for testing?",
        default: "npm test" 
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using this repo?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to this repo?",
    }
];

// function writeToFile(fileName, data) {
// }

function init() {
    inquirer.prompt(questions).then(function results(answers) {
        // console.log(answers)
        fs.writeFile("readme.md", generateMarkdown({ ...answers}), (err) => {
            if (err) {
                throw err
            }
            console.log("success");
        })
    })
}

init();
