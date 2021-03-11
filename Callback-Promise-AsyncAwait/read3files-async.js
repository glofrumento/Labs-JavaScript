import { readFile } from 'fs/promises'
import { writeFile } from 'fs/promises'

const args = process.argv.slice(2);

let file1 = args[0] || 'file1.txt'
let file2 = args[1] || 'file2.txt'
let file3 = args[2] || 'file3.txt'
let fileRisultato = 'ris-async.txt'
let path = './'

async function mergeFile() {
  let dati1
  let dati2
  let dati3
  try {
    dati1 = await readFile(`${path}${file1}`, 'utf-8');
    dati2 = await readFile(`${path}${file2}`, 'utf-8');
    dati3 = await readFile(`${path}${file3}`, 'utf-8');
  } catch (err) {
    console.log(err)
    return
  }

  let dati = dati1 + "\n" + dati2 + "\n" + dati3;

  try {
    await writeFile(`${path}${fileRisultato}`, dati, 'utf-8')
    console.log(`Il risultato è stato salvato nel file ${path}${fileRisultato}`)
  } catch (err) {
    console.log(err);
  }
}

mergeFile();