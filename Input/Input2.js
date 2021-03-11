let inquirer = require('inquirer');

const mediaArray = ["Gio", "Gina", "MArio"];

inquirer
  .prompt([
    {
      name: "first_name",
      type: "list",
      message: "What is your name?",
      choices: mediaArray,
      default: "Gio",
    },
    {
      name: "last_name",
      type: "input",
      message: "What is your last name?",
    },
    {
      name: "age",
      type: "number",
      message: "How old are you?",
    },
  ])
  .then(answer => {
    console.log("Hello", answer.first_name, answer.last_name, answer.age);
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  // https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
  // https://www.npmjs.com/package/inquirer