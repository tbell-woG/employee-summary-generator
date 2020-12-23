const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, title, github, school)
    {
        super(name, id, title);
        this.github = github
        this.school = school 
    }
getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
getPosition() {
    return "Intern";
}
}

module.exports = Intern;
