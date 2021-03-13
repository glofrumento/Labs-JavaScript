// Requiring the module 
const reader = require('xlsx')

// Reading our test file 
const file = reader.readFile('./test.xlsx')

let data = []

const sheets = file.SheetNames

//for (let i = 0; i < sheets.length; i++) {
for (let i = 0; i < 1; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])

  //  temp.forEach((res) => {
  //    data.push(res)
  //  })

  console.log(temp[0].giorno, temp[0].ora);
  console.log(temp[1].giorno, temp[1].ora);

  console.log(new Date(temp[0].giorno), temp[0].ora);
  console.log(ExcelDateToJSDate(temp[0].giorno))
  console.log(ExcelDateToHours(temp[0].ora))
}

function ExcelDateToJSDate(date) {
  return new Date(Math.round((date - 25569) * 86400 * 1000));
}

function ExcelDateToHours(serial) {
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

  let d = new Date(); // Creates a Date Object using the clients current time

  let [hours1, minutes1, seconds1] = stringHour.split(':'); // Using ES6 destructuring
  // var time = "18:19:02".split(':'); // "Old" ES5 version

  d.setHours(+hours1); // Set the hours, using implicit type coercion
  d.setMinutes(minutes1); // You can pass Number or String. It doesn't really matter
  d.setSeconds(seconds1);
  // If needed, adjust date and time zone

  console.log(d.toString()); // Outputs your desired time (+current day and timezone)


  return d;
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
