// Requiring the module 
//const readXlsxFile = require('read-excel-file/node');
//import readXlsxFile from 'read-excel-file/node'
const readXlsxFile = require('read-excel-file/node');
const df = require('dateformat');

let data = [];
const spaziatura = 12;
const spaziaturaMail = 21;
const separatoreColonne = '  ';
const charPad = ' ';

// File path.
readXlsxFile('./test.xlsx', { dateFormat: 'DD/MM/YY HH:MM' }).then((rows) => {
  // `rows` is an array of rows
  // each row being an array of cells.

  const rowsDati = rows.slice(1);

  // Nomi delle colonne
  for (let p of rows[0]) {
    (p == 'Email') ? data.push(pad(p, spaziaturaMail, charPad)) : data.push(pad(p, spaziatura, charPad));
  }
  console.log(data.join(separatoreColonne));

  rowsDati.forEach(row => {
    row[5] = df(row[5], "dd/mm/yyyy");
    row[7] = df(fromExcelHoursToJsHours(row[7]), "HH:MM:ss");
    row[8] = df(fromExcelHoursToJsHours(row[8]), "HH:MM:ss");

    console.log(row);
  })
})

function fromExcelHoursToJsHours(serial) {
  //let utc_days = Math.floor(serial - 25569);
  //let utc_value = utc_days * 86400;
  //let date_info = new Date(utc_value * 1000);

  let fractional_day = serial - Math.floor(serial) + 0.0000001;
  let total_seconds = Math.floor(86400 * fractional_day);
  let seconds = total_seconds % 60;
  total_seconds -= seconds;
  let hours = Math.floor(total_seconds / (60 * 60));
  let minutes = Math.floor(total_seconds / 60) % 60;

  let stringHour = `${hours}:${minutes}:00`;

  let d = new Date();

  let [hours1, minutes1, seconds1] = stringHour.split(':'); // Using ES6 destructuring
  // var time = "18:19:02".split(':'); // "Old" ES5 version

  d.setHours(+hours1); // Set the hours, using implicit type coercion
  d.setMinutes(minutes1); // You can pass Number or String. It doesn't really matter
  d.setSeconds(seconds1);

  // If needed, adjust date and time zone

  //console.log(d); // Outputs your desired time (+current day and timezone)

  return d;
}


function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return (n.length >= width) ? n : new Array(width - n.length + 1).join(z) + n;
}
