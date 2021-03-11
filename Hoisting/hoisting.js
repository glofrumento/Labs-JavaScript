nome = "Mario";
annoNascita = 2000;

console.log(`Nome: ${nome}`);

function eta(aNascita) {
  let annoCorrente = new Date().getFullYear();
  return annoCorrente - aNascita;
}

console.log(eta(annoNascita));

var nome;
var annoNascita;

// Eseguire il programma sostituendo var con let e dare una spiegazione
// del perché il programma con var funziona e con let no
