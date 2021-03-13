const myObject = {
  dog: "🐕",
  cat: "🐈",
  koala: "🐨",
  count: 3
};

console.log(JSON.stringify(myObject));

console.log(JSON.parse(JSON.stringify(myObject)));
