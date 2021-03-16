//const fs = require('fs');
import fs from 'fs';

const cliente = {
  nome: "Acme",
  numeroOrdine: 11,
  indirizzo: "Via Roma, 15 - Napoli"
}

const jsonString = JSON.stringify(cliente);

fs.writeFile('./acme.json', jsonString, err => {
  if (err) {
    console.log("Errore durante la scrittura del file:", err);
  } else {
    console.log('File scritto correttamente:', 'acme.json');
  }
})
