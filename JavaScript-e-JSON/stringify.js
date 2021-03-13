const persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 25,
  indirizzo: {
    via: "Roma",
    numero: 15,
    citta: "Pisa"
  }
};

let personaJSON = JSON.stringify(persona, ['nome', 'cognome'], 2);
console.log(personaJSON);

function replacer(key, value) {
  // Filtraggio delle proprietà
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

personaJSON = JSON.stringify(persona, replacer, 2);
console.log(personaJSON);


const utente = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 20,
  toJSON() {
    return {
      nomeCompleto: `${this.nome} ${this.cognome}`
    };
  }
}
console.log(JSON.stringify(utente, null, 2));