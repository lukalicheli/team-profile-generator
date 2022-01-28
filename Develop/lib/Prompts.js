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
        })
    }
};
