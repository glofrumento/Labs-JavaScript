//const reader = require('xlsx')
import reader from 'xlsx'

// Reading our test file 
const file = reader.readFile('./test.xlsx')

// Sample data set 
let datiStudente = [{
  Studente: 'Giuseppe Verdi',
  Eta: 22,
  Dipartimento: 'ICT',
  Crediti: 70
},
{
  Studente: 'Franco Nero',
  Eta: 21,
  Dipartimento: 'AI',
  Crediti: 80
}]

const ws = reader.utils.json_to_sheet(datiStudente)

reader.utils.book_append_sheet(file, ws, "Foglio3")

// Writing to our file 
reader.writeFile(file, './test.xlsx')