const utente = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 20,
  toJSON() {
    return {
      nome: `${this.nome}`,
      cognome: `${this.nome}`,
      eta: `${this.eta}`,
      nomeCompleto: `${this.nome} ${this.cognome}`
    };
  }
}
console.log(JSON.stringify(utente, null, 2));
