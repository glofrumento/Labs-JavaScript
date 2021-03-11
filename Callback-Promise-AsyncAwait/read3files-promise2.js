import { readFile } from 'fs/promises'
import { writeFile } from 'fs/promises'

const args = process.argv.slice(2);

let file1 = args[0] || 'file1.txt'
let file2 = args[1] || 'file2.txt'
let file3 = args[2] || 'file3.txt'
const fileRisultato = 'ris-promise.txt'
let path = './'

function esitoOperazione(err, risultato) {
  if (err !== null) {
    console.log(err.message);
    return;
  }
  console.log(risultato);
}

function mergeFile(callback) {
  let dati1, dati2, dati3;

  readFile(`${path}${file1}`, 'utf-8')
    .then(datiFile1 => {
      dati1 = datiFile1
      return readFile(`${path}${file2}`, 'utf-8')
    })
    //.catch(err => { return callback(new Error(err.message)) })
    .then(datiFile2 => {
      dati2 = datiFile2
      return readFile(`${path}${file3}`, 'utf-8')
    })
    //.catch(err => callback(new Error(err.message)))
    .then(datiFile3 => {
      dati3 = datiFile3

      let dati = `${dati1}
${dati2}
${dati3}`;

      writeFile(`${path}${fileRisultato}`, dati, 'utf-8')
        .then(() => callback(null, `Il risultato è stato salvato nel file ${path}${fileRisultato}`))
    })
    .catch(err => callback(new Error(err.message)))
}

mergeFile(esitoOperazione)
