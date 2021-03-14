// Requiring the module 
//const reader = require('xlsx')
import reader from 'xlsx';
import df from 'dateformat';

// Reading our test file 
const xls = reader.readFile('./test.xlsx');

let data = [];
let spaziatura = 12;
let separatoreColonne = '  ';

const sheets = xls.SheetNames;

//for (let i = 0; i < sheets.length; i++) {

const temp = reader.utils.sheet_to_json(xls.Sheets[xls.SheetNames[0]], { dateNF: "DD-MM-YYYY" });

const chiavi = Object.keys(temp[0]);

for (let p of chiavi) {
  (p == 'Email') ? data.push(pad(p, 21, ' ')) : data.push(pad(p, spaziatura, ' '));
}
// Nomi delle colonne
console.log(data.join(separatoreColonne));

temp.forEach(row => {
  //for (let i = 0; i < temp.length; i++) {
  data = [];
  const valori = Object.values(row);
  for (let p = 0; p < valori.length; p++) {
    if (p == 4) {
      data.push(pad(valori[p], 21, ' '));
      continue;
    }
    if (p == 5) {
      data.push(pad(df(fromExcelDateToJsDate(valori[p]), "dd/mm/yyyy"), spaziatura, ' '));
      continue;
    }
    if (p == 7 || p == 8) {
      data.push(pad(df(fromExcelHoursToJsHours(valori[p]), "HH:MM:ss"), spaziatura, ' '));
      continue;
    }
    data.push(pad(valori[p], spaziatura, ' '));
  }
  console.log(data.join(separatoreColonne));
})
//console.log('\n')

//  temp.forEach((res) => {
//    data.push(res)
//  })
console.log(temp[0]);

console.log('g', temp[0].Giorno);
console.log('h', temp[0]['Inizio (hh)']);

console.log(temp[0].Giorno, temp[0]['Inizio (hh)']);
console.log(temp[1].Giorno, temp[1]['Durata (hh)']);

console.log(new Date(temp[0].Giorno), temp[0]['Inizio (hh)']);
let data1 = fromExcelDateToJsDate(temp[0].Giorno);

let data2 = fromExcelHoursToJsHours(temp[0]['Inizio (hh)']);

//console.log(fromExcelDateToJsDate(temp[0].giorno))
//console.log(data);
console.log(df(data1, "dd/mm/yyyy"));
console.log(df(data2, "hh:MM:ss"));

function fromExcelDateToJsDate(date) {
  return new Date(Math.round((date - 25569) * 86400 * 1000));
}

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

  //console.log('5', d.toString()); // Outputs your desired time (+current day and timezone)

  return d;
}
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}



// function ExcelDateToJSDate1(serial) {
//   let utc_days = Math.floor(serial - 25569);
//   let utc_value = utc_days * 86400;
//   let date_info = new Date(utc_value * 1000);

//   let fractional_day = serial - Math.floor(serial) + 0.0000001;

//   let total_seconds = Math.floor(86400 * fractional_day);

//   let seconds = total_seconds % 60;

//   total_seconds -= seconds;

//   let hours = Math.floor(total_seconds / (60 * 60));
//   let minutes = Math.floor(total_seconds / 60) % 60;
//   console.log("----- ", hours, minutes);

//   return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
// }

// Printing data 
//console.log(data)
//console.log(sheets);


// https://www.geeksforgeeks.org/how-to-read-and-write-excel-file-in-node-js/


