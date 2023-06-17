// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [{
    name: "Q1",
    message: "What is the project's title?"
},
{
  name: "Q2",
  message: "Give a description of the Project?",
},
{
  name:"Q3",
  type: "list",
  message:"Choose a License",
  choices: [
    "Apache License 2.0",
    "Artistic license",
  ]
},
{
  name: "Q4",

}
];



// let car = {
// color: "silver",
// year: 2008,
// make: "toyota"
// }




// AN OBJECT IS A BUNDLE OF RELATED INFORMATION, MODEL THE REAL WORLD, Describing
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content = `Project Title: ${data.title}; Project description: ${data.description}; License: ${data.license}`;

fs.writeFile(fileName, content, err => 
{
  if (err) {
    console.error(err);
  }
  // file written successfully
});
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
 
  .then((answers) => {
    let readme = {};
    readme.title = answers.Q1;
    readme.description = answers.Q2;
    readme.license = answers.Q3;
    writeToFile("./READMETest.md", readme);

  })
  // answers are just objects, we are printing out the objects
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log(">>>error>>>", error)
    }
  });

}

// Function call to initialize app
init();