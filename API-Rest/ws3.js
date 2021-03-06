var express = require('express');
var bodyParser = require('body-parser');
 
require('body-parser-xml')(bodyParser);

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

// parsifica application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// formattazione dati JSON con due spazi di tab
app.set("json spaces", 2); 

// XML -->  <-- JSON
// curl -X POST -d "<libro><autore>Clive Cussler</autore><titolo>Sahara</titolo></libro>" -H "Content-Type:application/xml" -H "Accept:application/json" localhost:3000/xml

// XML -->  <-- XML
// curl -X POST -d "<libro><autore>Clive Cussler</autore><titolo>Sahara</titolo></libro>" -H "Content-Type:application/xml" -H "Accept:application/xml" localhost:3000/xml

// JSON -->  <-- JSON
// curl -X POST -d "{ \"libro\": { \"autore\": \"Clive Cussler\", \"titolo\": \"Sahara\" } }" -H "Content-Type:application/json" -H "Accept:application/json" localhost:3000/xml

// JSON -->  <-- XML
// curl -X POST -d "{ \"libro\": { \"autore\": \"Clive Cussler\", \"titolo\": \"Sahara\" } }" -H "Content-Type:application/json" -H "Accept:application/xml" localhost:3000/xml

// URL-ENCODED --> <-- JSON
// curl -X POST -d "autore=Clive Cussler&titolo=Sahara" -H "Accept:application/json" localhost:3000/xml
app.post('/xml', function(req, res) {
  console.log(req.headers.accept);

  switch(req.headers.accept) {
  	case "application/xml" :
      console.log(req.body);
  	  res.set('Content-Type', 'application/xml');
      res.status(200).send(jsonxml(req.body, {prettyPrint: true, xmlHeader: true}));
  	  break;
  	case "application/json" :
  	  res.set('Content-Type', 'application/json');
      res.status(200).json(req.body);
  	  break;
  	default :
  	  res.status(404).send("Mime non supportato");
  }
});

// il server si mette in ascolto sul port PORT
app.listen(PORT, function () {
  console.log('Server listening on port ' + PORT);
});
