const args = process.argv.slice(2);

const lunghezza = args[0];
let n;
let n_1 = 1;
let n_2 = 0;
let serieFib = [1];

if (lunghezza <= 0 || lunghezza == undefined) {
  console.log("ERRORE");
  process.exit(1)
}

if (lunghezza > 1) {
  for (let i = 1; i < lunghezza; ++i) {
    n = n_1 + n_2;
    serieFib.push(n);
    n_2 = n_1;
    n_1 = n;
  }
}

console.log(`\nSerie di Fibonacci di ${lunghezza} numeri`);
console.log(serieFib.join(', '));
