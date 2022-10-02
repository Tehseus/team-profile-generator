const Employee = require(`./Employee`)

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, `Manager`)
        this.officeNumber = officeNumber
    }
    getRole() {
        return "Manager"
    }

    getOfficeNum() {
        return this.officeNumber
    }
}

// const test = new Manager(`Max`,`420`, `test@test.com`, 69)

// console.log(test);

module.exports = Manager;