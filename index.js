// TODO: Include packages needed for this application
var inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ["what is your inspiration?", "what is your pokemon?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

inquirer.prompt(questions)
  .then((answers) => {
    console.log(">>Q>>", answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
