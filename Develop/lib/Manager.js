// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, title, github, officeNumber)
    {
        super(name, id, title);
        this.github = github
        this.officeNumber = officeNumber
    }
}

module.exports = Manager;