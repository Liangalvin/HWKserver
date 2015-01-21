var express = require('express');
var app = express();
app.use(express.static('public'));


app.get('/', function(req, res) {

var names = ["Ricki", "Katrina", "Gabriel", "Shoshanah"];
var towns = ["Cleveland", "Taiwan", "Conneticut", "Los Angeles", "New York"];
var hashTag = ["#real talk", "#real life", "#shit happens", "That's wassup"];
var teams = ["Knicks", "76ers", "Timberwolves", "Lakers", "Magic", "Hornets"];
var person;

var rand_name = names[Math.floor(Math.random() * names.length)];
var rand_town = towns[Math.floor(Math.random() * towns.length)];
var rand_num = Math.floor(Math.random() * 99);
var rand_team = teams[Math.floor(Math.random() * teams.length)];
var rand_tag = hashTag[Math.floor(Math.random() * hashTag.length)];

  person = {
    name: rand_name,
    hometown: rand_town,
    number: rand_num,
    team: rand_team,
    says: rand_tag
  }
  res.json(person);
  console.log("Sent from /index");
});

var server = app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
