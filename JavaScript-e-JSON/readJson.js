//const fs = require('fs');
import fs from 'fs';

fs.readFile('./cliente.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log("Errore durante la lettura del file:", err)
    return
  }
  try {
    const cliente = JSON.parse(jsonString)
    console.log("L'indirizzo del cliente è:", cliente.indirizzo) // => "Customer address is: Infinity Loop Drive"
  } catch (err) {
    console.log('Errore parsine stringa JSON:', err)
  }
})
