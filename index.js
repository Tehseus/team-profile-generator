const inquirer = require("inquirer")
const fs = require("fs")
const generateHtml = require("./utils/generateHtml")

const Employee = require("./lib/Employee.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")
const Manager = require("./lib/Manager.js")

const employeeBucket = []


const init = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Manager name",
            name: "managerName"

        },
        {
            type: "input",
            message: "Enter ID",
            name: "managerId"

        },
        {
            type: "input",
            message: "Enter email",
            name: "managerEmail"

        },
        {
            type: "input",
            message: "Enter Manager office number",
            name: "managerOfficeNum"

        },
    ]).then((managerData) => {
        const { managerName, managerId, managerEmail, managerOfficeNum } = managerData
        const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNum)
        employeeBucket.push(manager)
        anotherEmployee(manager)
        
    })
}
const anotherEmployee = () => {
    
    return inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add an employee?",
            choices: [
                "Engineer",
                "Intern",
                "No, that's all."
            ],
            name: "employeeAdd",

        }
    ]).then((newCase) => {
        switch (newCase.employeeAdd) {
            case "Engineer":
                addEngineer()
                break;
            case "Intern":
                addIntern()
                break;
            case "No, that's all.":
                pushNewEmployee()
            }
        })
    }
    
    const addEngineer = () => {
        return inquirer.prompt([
            {
                type: "input",
                message: "Enter the engineer's name",
                name: "engineerName"
                
            },
            {
                type: "input",
                message: "Enter the new engineer's employee ID",
                name: "engineerId"
                
            },
            {
                type: "input",
                message: "Enter the new engineer's email",
                name: "engineerEmail"
                
            },
            {
                type: "input",
                message: "Enter engineer's GitHub username",
                name: "engineerGit"
                
            },
        ]).then((engineerData) => {
        const { engineerName, engineerId, engineerEmail, engineerGit } = engineerData
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGit)
        employeeBucket.push(engineer)
        anotherEmployee()
    })
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter intern's name",
            name: "internName"
            
        },
        {
            type: "input",
            message: "Enter the new intern's employee ID",
            name: "internId"
            
        },
        {
            type: "input",
            message: "Enter the new intern's email address",
            name: "internEmail"
            
        },
        {
            type: "input",
            message: "Name of the school the new intern attends",
            name: "internSchool"
            
        },
    ]).then((internData) => {
        const { internName, internId, internEmail, internSchool } = internData
        const intern = new Intern(internName, internId, internEmail, internSchool)
        employeeBucket.push(intern)
        anotherEmployee(intern)
        
    })
}

const pushNewEmployee = () => { 
    fs.writeFileSync("./dist/imgs/index.html", generateHtml(employeeBucket), (err) => err ? console.log("Please start over, you seem to have missed some fields. Thanks!") : console.log("html created"))
    
}

init()