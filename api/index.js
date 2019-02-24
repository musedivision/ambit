var express = require('express');
var app = express();
var Datastore = require('nedb'),
  db = new Datastore({
    filename: 'db.json',
    autoload: true,
  });

app.get(['/everyone', '/'], function(req, res) {
  db.find({}, {}, (err, docs) => {
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
        $lt: 30
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
        $gte: 30
      },
    },
    {},
    (err, docs) => {
      res.status(200).json(docs);
    },
  );
});



app.listen(6969, function() {
  console.log('Example app listening on port 3000!');
});
