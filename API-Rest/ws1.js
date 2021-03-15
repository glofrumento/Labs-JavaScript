var express = require('express');
var bodyParser = require('body-parser');
 
require('body-parser-xml')(bodyParser);

var PORT = 3000;

var app = express();

// parsifica application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// formattazione dati JSON con due spazi di tab
app.set("json spaces", 2); 

///// REST ACTIONS \\\\\

// passaggio di un parametro
// curl localhost:3000/123
app.get('/:id', function (req, res) {
  res.send('Richiesta GET - id: ' + req.params.id);
});

// passaggio di due parametri
// curl localhost:3000/123/subres/456
app.get('/:id/subres/:subid', function (req, res) {
  res.send('Richiesta GET - id: ' + req.params.id + ' subid: ' + req.params.subid);
});

// curl -X PUT localhost:3000/123
app.put('/:id', function (req, res) {
  res.send('Richiesta PUT - id: ' + req.params.id);
});

// curl -X DELETE localhost:3000/123
app.delete('/:id', function (req, res) {
  res.send('Richiesta DELETE - id: ' + req.params.id);
});

// curl -X POST -d "autore=Clive Cussler&titolo=Sahara" localhost:3000/new
app.post('/new', function(req, res) { 
  res.status(200).send(req.body);
});

// Il server si mette in ascolto sul port PORT
app.listen(PORT, function () {
  console.log('Server listening on port ' + PORT);
});
