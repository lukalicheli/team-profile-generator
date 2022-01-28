const Employee = require("./Employee");
const Manager = require("./Manager");
const Intern = require("./Intern");
const Engineer = require("./Engineer");
const inquirer = require("inquirer");
const fs = require('fs');

class Prompts {
    constructor() {
        this.managers = [];
        this.interns = [];
        this.engineers = [];
    }
    managerPrompt() {
        inquirer
        .prompt([
            {
                type: "input", 
                message: "What is the manager's name?",
                name: "managerName"
            },
            {
                type: "input", 
                message: "What is the manager's id number?",
                name: "managerId"
            },
            {
                type: "input", 
                message: "What is the manager's email address?",
                name: "managerEmail"
            },
            {
                type: "input", 
                message: "What is the manager's office number?",
                name: "managerNumber"
            }
        ])
        .then(({managerName, managerId, managerEmail, managerNumber}) => {
            const manager = new Manager(managerName, managerId, managerEmail, managerNumber);
            this.managers.push(manager);
            this.addEmployee();
        })
    }
    internPrompt() {
        inquirer
        .prompt([
            {
                type: "input", 
                message: "What is the intern's name?",
                name: "internName"
            },
            {
                type: "input", 
                message: "What is the intern's id number?",
                name: "internId"
            },
            {
                type: "input", 
                message: "What is the intern's email address?",
                name: "internEmail"
            },
            {
                type: "input", 
                message: "What school is the intern currently attending?",
                name: "internNumber"
            }
        ])
        .then(({internName, internId, internEmail, internNumber}) => {
            const intern = new Intern(internName, internId, internEmail, internNumber);
            this.interns.push(intern);
            this.addEmployee();
        })
    }
    engineerPrompt() {
        inquirer
        .prompt([
            {
                type: "input", 
                message: "What is the engineer's name?",
                name: "engineerName"
            },
            {
                type: "input", 
                message: "What is the engineer's id number?",
                name: "engineerId"
            },
            {
                type: "input", 
                message: "What is the engineer's email address?",
                name: "engineerEmail"
            },
            {
                type: "input", 
                message: "What is the engineer's GitHub username?",
                name: "engineerGitHub"
            }
        ])
        .then(({engineerName, engineerId, engineerEmail, engineerGitHub}) => {
            const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGitHub);
            this.engineers.push(engineer);
            this.addEmployee();
        })
    }
    addEmployee() {
        inquirer
        .prompt([
            {
                type: "list",
                message: "Do you want to add another employee?",
                choices: ["Intern", "Engineer", "Finish building my team"],
                name: "buildTeam"
            }
        ])
        .then(({buildTeam}) => {
            if (buildTeam == "Intern") {
                this.internPrompt();
            } else if(buildTeam == "Engineer") {
                this.engineerPrompt();
            } else {
                this.writeFile();
            }
        });
    }
};


module.exports = Prompts;