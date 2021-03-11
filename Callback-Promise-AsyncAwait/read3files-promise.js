import { readFile } from 'fs/promises'
import { writeFile } from 'fs/promises'

const args = process.argv.slice(2);

let file1 = args[0] || 'file1.txt'
let file2 = args[1] || 'file2.txt'
let file3 = args[2] || 'file3.txt'
const fileRisultato = 'ris-promise.txt'

let dati1;
let dati2;
let dati3;

function d1(dati) {
  dati1 = dati
}

function d2(dati) {
  dati2 = dati
}

function d3(dati) {
  dati3 = dati
}

function mergeFile() {
  readFile(file1, 'utf-8')
    .then(datiFile => d1(datiFile))
  readFile(file2, 'utf-8')
    .then(datiFile => d2(datiFile))
  readFile(file3, 'utf-8')
    .then(datiFile => d3(datiFile))
}

function salva() {
  let dati = dati1 + "\n" + dati2 + "\n" + dati3;

  writeFile(fileRisultato, dati, 'utf-8')
    .then(() => console.log(`Il risultato è stato salvato nel file ${fileRisultato}`))
}

mergeFile();

setTimeout(salva, 1000)
