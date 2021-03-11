const args = process.argv.slice(2);

let messaggio;
let offset = 3;

switch (args[0]) {
  case "cifra":
    messaggio = cifra(args[1]);
    break;
  case "decifra":
    messaggio = decifra(args[1]);
    break;
}

console.log(messaggio);

function cifra(msg) {
  let msgCifrato = "";
  // ES 5
  for (let i = 0; i < msg.length; i++) {
    let carCifrato = msg.charCodeAt(i) + offset;
    msgCifrato += String.fromCharCode(carCifrato);
  }
  return msgCifrato;
}

function decifra(msg) {
  let msgDecifrato = "";
  for (let i = 0; i < msg.length; i++) {
    let carDecifrato = msg.charCodeAt(i) - offset;
    msgDecifrato += String.fromCharCode(carDecifrato);
  }
  return msgDecifrato;
}
