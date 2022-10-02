const inquirer = require(`inquirer`)
const fs = require(`fs`)
const Employee = require(`./classes/Employee.js`)
const Engineer = require(`./classes/Engineer.js`)
const Intern = require(`./classes/Intern.js`)
const Manager = require(`./classes/Manager.js`)
const employeeBucket = []

const init = () => {
    return inquirer.prompt([
        {
            type: `input`,
            message: `Enter Manager name:`,
            name: `managerName`,

        },
        {
            type: `input`,
            message: `Enter Manager ID`,
            name: `managerID`

        },
        {
            type: `input`,
            message: `Enter Manager email`,
            name: `managerEmail`,

        },
        {
            type: `input`,
            message: `Enter Manager office number`,
            name: `managerOfficeNumber`,

        },
    
    ])  .then((manager) => {
            const {managerName, managerId, managerEmail, managerOfficerNumber} = manager
            const manager = new Manager(managerName, managerId, managerEmail, managerOfficerNumber) = manager
            employeeBucket.push(manager)
            console.log(employeeBucket);
            anotherEmployee
    })
}
const anotherEmployee = () => {
    inquirer.prompt([
        {
            type: `Choices`,
            message: ``,
            Choices: ``,
        }
    ])
}
init()