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

const persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 25,
  indirizzo: {
    via: "Roma",
    numero: 15,
    citta: "Pisa"
  },
  dispositivi: ["smartphone", "tablet"],

  nomeCompleto() {
    return `${this.nome} ${this.cognome}`
  }
};

console.log(persona);
console.log(persona.nomeCompleto());

// conversione di un oggetto JavaScript in JSON
const personaJSON = JSON.stringify(persona, null, 2);
console.log(personaJSON);

// conversione di un oggetto JSON in un'oggetto JavaScript
const personaJs = JSON.parse(jsonData);
console.log('\n', personaJs);
