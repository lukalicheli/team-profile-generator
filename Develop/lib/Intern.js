const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email)
        super.role = "Intern";
    }
    getSchool() {
        return this.school;
    }
};

module.exports = Intern;