class Employee {
    constructor(name, id, email, title) {
        this.name = name
        this.id = id
        this.email = email
        this.title = title
    }
}

const test = new Employee(`Grayson` , `69`, `test@email.com`, `CEO`)
console.log(test);

module.exports = Employee;