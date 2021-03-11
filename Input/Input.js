var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var fav_foods = [];

var ask_question = function () {
  rl.question("What is your favourite food? ", function (answer) {
    fav_foods.push(answer)
    fav_foods.forEach(function (element) {
      console.log("Your favourite food is " + element)
    })
    ask_question()
  });
}

ask_question()
