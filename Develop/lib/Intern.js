const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, title, school)
    {
        super(name, id, title);
        this.school = school 
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
getRole() {
    return "Intern";
}
}

module.exports = Intern;
