// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, title, github)
    {
        super(name, id, title);
        this.github = github
    }
getName() {
    return this.name;
}
getID() {
    return this.id;
}
getEmail() {
    return this.email;
}
getPosition() {
    return "Engineer";
}
}

module.exports = Engineer;