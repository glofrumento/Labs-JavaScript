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
  msg.split('').forEach(c => {
    let carCifrato = c.charCodeAt(0) + offset;
    msgCifrato += String.fromCharCode(carCifrato);
  })

  return msgCifrato;
}

function decifra(msg) {
  let msgDecifrato = "";

  msg.split('').forEach(c => {
    let carDecifrato = c.charCodeAt(0) - offset;
    msgDecifrato += String.fromCharCode(carDecifrato);
  })

  return msgDecifrato;
}
