//var rl = require('readline-sync');
import rl from 'readline-sync';

function numeroDaIndovinare(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const MIN = 0;
const MAX = 100;
let EXIT = false;

const numObiettivo = numeroDaIndovinare(MIN, MAX);
console.log(`Numero da indovinare: ${numObiettivo}`);

console.log(" /==================\\");
console.log("| INDOVINA IL NUMERO |");
console.log(" \\==================/\n");

const prompt = "\nIndovina il numero (0..100): ";

while (!EXIT) {
  let input = rl.question(prompt);

  const numInput = parseInt(input);

  if (numInput > numObiettivo) {
    console.log(`Il numero ${input} e' piu' alto`);
    continue
  }

  if (numInput < numObiettivo) {
    console.log(`Il numero ${input} e' piu' basso`);
    continue
  }

  if (numInput === numObiettivo) {
    console.log(`Bravo! Hai indovinato`);
    EXIT = true;
  }
}
