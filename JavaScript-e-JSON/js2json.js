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

//console.log(persona);
//console.log(persona.nomeCompleto());

// conversione di un oggetto JavaScript in JSON
let personaJSON = JSON.stringify(persona);
console.log(personaJSON);

personaJSON = JSON.stringify(persona, null, 2);
console.log('\n', personaJSON);
