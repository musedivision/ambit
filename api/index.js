var express = require('express');
var fs = require('fs');

var app = express();

var Datastore = require('nedb'),
  db = new Datastore({
    filename: 'db.json',
    autoload: true,
  });

app.use(express.static('build'));

app.get('/', (req, res) => {
  console.log('/ route ' );
  fs.readFile('./build/index.html', 'utf8', (err, data) => {
    res.contentType('text/html');
    console.log('data: ', data);
    res.status(200).send(data);
  });
});

app.get('/everyone', function(req, res) {
  db.find({}, {}, (err, docs) => {
    console.log('docs: ', docs);
    res.status(200).json(docs);
  });
});

app.get('/male', function(req, res) {
  db.find(
    {
      gender: 'male',
    },
    {},
    (err, docs) => {
      res.status(200).json(docs);
    },
  );
});

app.get('/female', function(req, res) {
  db.find(
    {
      gender: 'female',
    },
    {},
    (err, docs) => {
      res.status(200).json(docs);
    },
  );
});

app.get('/under30', function(req, res) {
  db.find(
    {
      age: {
        $lt: 30,
      },
    },
    {},
    (err, docs) => {
      res.status(200).json(docs);
    },
  );
});

app.get('/over30', function(req, res) {
  db.find(
    {
      age: {
        $gte: 30,
      },
    },
    {},
    (err, docs) => {
      res.status(200).json(docs);
    },
  );
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
