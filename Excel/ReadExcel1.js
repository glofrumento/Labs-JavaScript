// Requiring the module 
//const readXlsxFile = require('read-excel-file/node');
//import readXlsxFile from 'read-excel-file'
const readXlsxFile = require('read-excel-file/node');

// File path.
readXlsxFile('./test.xlsx', { dateFormat: 'DD/MM/YY HH:MM' }).then((rows) => {
  // `rows` is an array of rows
  // each row being an array of cells.

  console.log(rows[1]);
  console.log(rows[2]);
})

// Printing data 
//console.log(data)
