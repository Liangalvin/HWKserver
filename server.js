// var request = require('request');
// var url = "http://api.randomuser.me/";
//
// request(url, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     var data = JSON.parse(body)
//     console.log(data.results[0].user.name);
//   }
// })



var express = require('express');
var request = require('request');

var app = express();

app.get('/', function(req, res) {
  var url = 'http://api.randomuser.me/';
  var personJSON;

  request(url, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      var data = JSON.parse(body);
      var person = data['results'][0]['user'];
      personJSON = {
        firstName: person['name']['first'],
        lastName: person['name']['last'],
        email: person['email'],
        username: person['username']
      };
      res.json(personJSON);
    }
  });
});

var server = app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
