const jsonData = `{
  "nome": "Mario",
  "cognome": "Rossi",
  "eta": 25,
  "indirizzo": {
    "via": "Roma",
    "numero": 15,
    "citta": "Pisa"
  },
  "dispositivi": ["smartphone", "tablet"]
}`;

// conversione di un oggetto JSON in un'oggetto JavaScript
const personaJs = JSON.parse(jsonData);
console.log(personaJs);
