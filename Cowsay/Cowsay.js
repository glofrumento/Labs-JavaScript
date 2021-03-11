const cow = [
  ['\\'],
  [' \\   ^__^'],
  ['  \\  (oo)\\_______'],
  ['     (__)\\       )\\/\\/\\/\\'],
  ['      U  ||----w |'],
  ['       __||____||__']
];

const versoCow = 'MMuuu!';
const verso = "verso";
const args = process.argv.slice(2);

function printMsg(msg) {
  const linea = new Array(msg.length + 3).join('-');
  const str1 = ` ${linea}`;
  const str2 = `( ${msg} )`;
  const str3 = ` ${linea}`;

  console.log(str1);
  console.log(str2);
  console.log(str3);
}

function printCow(offset = 0) {
  let strOffset = new Array(offset).join(' ');
  cow.forEach(r => console.log(strOffset + r.join('')));
}

let msg = args.join(' ') == verso ? versoCow : args.join(' ');
let offset = Math.round(msg.length / 2) + 3;

msg.length == 0 ? (
  cow[0] = [''],
  cow[1] = ['     ^__^'],
  cow[2] = ['     (oo)\\_______'],
  printCow(offset)
) : (
  printMsg(msg),
  printCow(offset)
)
