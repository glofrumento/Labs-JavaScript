//let rl = require('readline-sync');
import rl from 'readline-sync';

const MIN = 0;
const MAX = 100;
let EXIT = false;
let input;
let numTentativi = 0;
let maxTentativi = 10;
let messaggio;

const args = process.argv.slice(2);

if (args.length > 0)
  maxTentativi = args[0];

const numObiettivo = Math.round(Math.random() * (MAX - MIN) + MIN);
console.log(`Numero da indovinare: ${numObiettivo}`);

console.log("\n /==================\\");
console.log("| INDOVINA IL NUMERO |");
console.log(" \\==================/");
console.log(`\nHai ${maxTentativi} TENTATIVI\n`);

const prompt = `Indovina il numero (0..100): `;

while (!EXIT) {
  console.log(`\nTENTATIVO ${++numTentativi} su ${maxTentativi}`);
  input = parseInt(rl.question(prompt));

  if (input > numObiettivo) {
    messaggio = `Il numero ${input} e' piu' alto`;
  }

  if (input < numObiettivo) {
    messaggio = `Il numero ${input} e' piu' basso`;
  }

  if (input === numObiettivo) {
    messaggio = `BRAVO! Hai indovinato in ${numTentativi} tentativi`;
    EXIT = true;
  }

  if (numTentativi == maxTentativi && !EXIT) {
    messaggio = `Mi dispiace, HAI PERSO! il numero da indovinare era ${numObiettivo}`;
    EXIT = true;
  }

  console.log(`\n${messaggio}`);

}
