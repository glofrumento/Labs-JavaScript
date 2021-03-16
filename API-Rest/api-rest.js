// const express = require('express');
// const xmlparser = require('express-xml-bodyparser');
// const jsonxml = require('jsontoxml');   // converte gli oggetti JSON in XML

import express from 'express';
import xmlparser from 'express-xml-bodyparser';
import jsonxml from 'jsontoxml';   // converte gli oggetti JSON in XML

const app = express();

// MIDDLEWARE
app.use(express.json());    // parsifica application/json
app.use(xmlparser());       // parsifica application/xml
app.use(express.urlencoded({ extended: true }));  // parsifica application/x-www-form-urlencoded

const PORT = 3000;

// formattazione dati JSON con due spazi di tab
//app.set("json spaces", 2);


// Richieste GET
//
// curl localhost:3000
app.get('', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.status(200).send('API RESTful in JavaScript');
});

// passaggio di un parametro
// curl localhost:3000/123
app.get('/:id', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.status(200).send('Richiesta GET - id: ' + req.params.id);
});

// passaggio di due parametri
// curl localhost:3000/123/subresource/456
app.get('/:id/subresource/:subid', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.status(200).send('Richiesta GET - id: ' + req.params.id + ' subid: ' + req.params.subid);
});


// Richieste PUT
//
// curl -X PUT localhost:3000/123
app.put('/:id', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.status(200).send('Richiesta PUT - id: ' + req.params.id);
});


// Richieste PATCH
//
// curl -X PATCH localhost:3000/123
app.patch('/:id', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.status(200).send('Richiesta PATCH - id: ' + req.params.id);

  // http://jsonpatch.com/
  // http://jsonpatchjs.com/
});


// Richiesta DELETE
//
// curl -X DELETE localhost:3000/123
app.delete('/:id', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.status(200).send('Richiesta DELETE - id: ' + req.params.id);
});


// Richiesta POST
//
// XML -->  <-- JSON
// curl -X POST -d "<libro><autore>Clive Cussler</autore><titolo>Sahara</titolo></libro>" -H "Content-Type:application/xml" -H "Accept:application/json" localhost:3000/xml | jq

// XML -->  <-- XML
// curl -X POST -d "<libro><autore>Clive Cussler</autore><titolo>Sahara</titolo></libro>" -H "Content-Type:application/xml" -H "Accept:application/xml" localhost:3000/xml | xmllint --format -

// JSON -->  <-- JSON
// curl -X POST -d "{ \"libro\": { \"autore\": \"Clive Cussler\", \"titolo\": \"Sahara\" } }" -H "Content-Type:application/json" -H "Accept:application/json" localhost:3000/xml | jq

// JSON -->  <-- XML
// curl -X POST -d "{ \"libro\": { \"autore\": \"Clive Cussler\", \"titolo\": \"Sahara\" } }" -H "Content-Type:application/json" -H "Accept:application/xml" localhost:3000/xml | xmllint --format -

// URL-ENCODED --> <-- JSON
// curl -X POST -d "autore=Clive Cussler&titolo=Sahara" -H "Accept:application/json" localhost:3000/xml | jq
//app.post('/xml', xmlparser({ trim: false, explicitArray: false }), function (req, res) {
app.post('/xml', function (req, res) {
  console.log(req.headers.accept);

  switch (req.headers.accept) {
    case "application/xml":
      console.log('xml', req.body);
      res.set('Content-Type', 'application/xml');
      res.status(200).send(jsonxml(req.body, { /*prettyPrint: true,*/ xmlHeader: true }));
      break;
    case "application/json":
      console.log('json', req.body);
      res.set('Content-Type', 'application/json');
      res.status(200).json(req.body);
      break;
    default:
      res.status(404).send("Mime non supportato");
  }
});

// il server si mette in ascolto sul port PORT
app.listen(PORT, function () {
  console.log('Server listening on port ' + PORT);
});
