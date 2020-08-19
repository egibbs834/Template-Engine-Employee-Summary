const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = []; 


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


const engineerQuestions = [
    {
        name: "name", 
        type: "type", 
        message: "Name of Engineer: ", 
    }, 
    {
        name: "id", 
        type: "input", 
        message: "ID# of Engineer: ", 
    }, 
    {
        name: "email", 
        type: "type", 
        message: "Email of Engineer: ", 
    },
    {
        name: "github", 
        type: "type", 
        message: "Github Account: ", 
    }      
]

const internQuestions = [
    {
        name: "name", 
        type: "type", 
        message: "Name of Intern: ", 
    }, 
    {
        name: "id", 
        type: "input", 
        message: "ID# of Intern: ", 
    }, 
    {
        name: "email", 
        type: "type", 
        message: "Email of Intern: ", 
    },
    {
        name: "school", 
        type: "type", 
        message: "School Attended: ", 
    }      
]

const managerQuestions = [
    {
        name: "name", 
        type: "type", 
        message: "Name of Manager: ", 
    }, 
    {
        name: "id", 
        type: "input", 
        message: "ID# of Manager: ", 
    }, 
    {
        name: "email", 
        type: "type", 
        message: "Email of Manager: ", 
    },
    {
        name: "officeNumber", 
        type: "type", 
        message: "Office Number: ", 
    }      
]

const otherQuestions = [
    {
        name: "confirm", 
        type: "list", 
        message: "Add another employee or select Finish if done", 
            choices: [
                "Engineer", 
                "Intern", 
                "Finish"
            ]
    }
]
// function starts the app with manager questions
function startApp() {
    inquirer.prompt(managerQuestions).then(function ({ name, id, email, officeNumber }) {
        const manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
        console.log(manager);
        return selectEmployee(); 
    })
}

// function - asks if user wants to create an employee, gives options, ends app if answer is Finish
    // how to check to see what option picked: intern, engineer, finish?
function selectEmployee() {
    return inquirer.prompt(otherQuestions).then(function ({ confirm }) {
        if (confirm === "Engineer") {
            return addEngineer(); 
        } else if (confirm === "Intern") {
            return addIntern(); 
        } else {
            return endApp();
        }
    })
}

// function - if engineer selected, create engineer, then go back to selectEmployee()
function addEngineer() {
    return inquirer.prompt(engineerQuestions).then(function ({ name, id, email, github }) {
        const engineer = new Engineer(name, id, email, github);
        employees.push(engineer);
        console.log(engineer);
        return selectEmployee(); 
    })
}

// function - if intern selected, create intern, then go back to selectEmployee()
function addIntern() {
    return inquirer.prompt(internQuestions).then(function ({ name, id, email, school }) {
        const intern = new Intern(name, id, email, school);
        employees.push(intern);
        console.log(intern);
        return selectEmployee(); 
    })

}

// function - ends application and outputs an html file (somehow)
function endApp() {
    const html = render(employees);
    fs.writeFileSync("./output/team.html", html, "utf8");
}

startApp();
// 

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
