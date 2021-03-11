import { readFile } from 'fs'
import { writeFile } from 'fs'

let file1 = 'file1.txt'
let file2 = 'file2.txt'
let file3 = 'file3.txt'
let fileRisultato = 'ris-calback.txt'
let path = './'

function esitoOperazione(err, risultato) {
  if (err !== null) {
    console.log(err.message);
    return;
  }
  console.log(risultato);
}

function mergeFile(callback) {
  readFile(path + file1, 'utf8', function (err, dati1) {
    if (err) return callback(new Error(err.message))
    readFile(path + file2, 'utf8', function (err, dati2) {
      if (err) return callback(new Error(err.message))
      readFile(path + file3, 'utf8', function (err, dati3) {
        if (err) return callback(new Error(err.message))

        let dati = dati1 + "\n" + dati2 + "\n" + dati3;

        writeFile(path + fileRisultato, dati, function (err) {
          if (err) return callback(new Error(err.message))
          callback(null, `Il file creato è: ${path}${fileRisultato}`)
        })
      })
    })
  })
}

mergeFile(esitoOperazione);
console.log("Fine programma");

