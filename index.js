const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
async function questions(options){
    let data = await inquirer.prompt([
        {
        
        type: 'input',
        name: 'team manager',
        message: "Name?",
    },

    {
        type: 'input',
        name: 'Mid',
        message: "Employee ID?",
    },
    {
        type: 'input',
        name: 'Email',
        message: "Email address?", 
    },
    {
        type: 'input',
        name: 'number',
        message: "Office number?",
    },
    {
        type: 'list',
        name: 'menu',
        message: 'Choose your team member',
        choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
    },
    {
        type: 'input',
        name: 'Engineer',
        message: "Engineer's name?",
       
    },
    {
        type: 'input',
        name: 'Eid',
        message: "ID?",
    },

    {
        type: 'input',
        name: 'Eemail',
        message: "Email?",
    },
    {
        type: 'input',
        name: 'Egithub',
        message: "Github username?",
    },
    {
        type: 'input',
        name: 'Intern',
        message: "Name?",
    },
    {
        type: 'input',
        name: 'Iid',
        message: "ID?",
    },
    {
        type: 'input',
        name: 'Iemail',
        message: "Email?",
    },
    {
        type: 'input',
        name: 'School',
        message: "Intern's school?",
    },

])

if (options === "Add an engineer") {
   return 
}


}


