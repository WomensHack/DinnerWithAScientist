var express = require('express');
var app = express();
var request = require('request');

app.use(express.static(__dirname + '/Public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

module.exports = app;
