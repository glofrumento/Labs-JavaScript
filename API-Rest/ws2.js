var express = require('express');
var bodyParser = require('body-parser');
 
require('body-parser-xml')(bodyParser);

//var xmlv = require('body-parser-xml');
//xmlv(bodyParser);

var PORT = 3000;

// converte gli oggetti JSON in XML
var jsonxml = require('jsontoxml');
//var xml = require('xml');

var app = express();

// parsifica application/json
app.use(bodyParser.json());

// parsifica application/xml
app.use(bodyParser.xml({
  limit: '1MB',   // Reject payload bigger than 1 MB 
  xmlParseOptions: {
    normalize: true,     // elimina gli spazi bianchi fra i nodi 
    normalizeTags: true, // Trasforma i tag ion minuscolo 
    explicitArray: false // mette i nodi in un array solo se >1 
  }
}));

// formattazione dati JSON con due spazi di tab
app.set("json spaces", 2); 

// curl -X POST -d "<libro><autore>Clive Cussler</autore><titolo>Sahara</titolo></libro>" -H "Content-Type:application/xml" localhost:3000/json
// curl -X POST -d "{\"libro\": {\"autore\": \"Clive Cussler\", \"titolo\": \"Sahara\" }}" -H "Content-Type:application/json" localhost:3000/json
app.post('/json', function(req, res) {
  console.log(req.body);
  res.status(200).send(req.body);
});

// curl -X POST -d "<libro><autore>Clive Cussler</autore><titolo>Sahara</titolo></libro>" -H "Content-Type:application/xml" localhost:3000/xml
// curl -X POST -d "{\"libro\": {\"autore\": \"Clive Cussler\", \"titolo\": \"Sahara\" }}" -H "Content-Type:application/json" localhost:3000/xml
app.post('/xml', function(req, res) {
  console.log(req.body);
  res.status(200).send(jsonxml(req.body, {xmlHeader: true}));
});

// il server si mette in ascolto sul port PORT
app.listen(PORT, function () {
  console.log('Server listening on port ' + PORT);
});
