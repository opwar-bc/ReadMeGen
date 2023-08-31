// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter the project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description for your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter the installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter the usage information:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter the test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license for the project:",
    choices: ["Mit", "GNU", "Apache", "ISC", "None"],
  },
  {
    type: "input",
    name: "guidlines",
    message: "Please enter the contribution guidelines:",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, data, (err) =>
    err
      ? console.error(err)
      : console.log("README file has been generated successfully!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile("README", markdownContent);
  });
}

// Function call to initialize app
init();
