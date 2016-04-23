//Requires Frameworks
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var controller = require('./controllers/control');

//loads data
var data;

//parses data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


//sets ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

//renders views
app.get('/', controller.home );//app.get('/location of url', jsfile.module);


//listens on port 3000
app.listen(3000, function() {
    console.log("Running on local host 3000");
});
