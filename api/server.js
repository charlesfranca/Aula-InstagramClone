var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded


var usuarios = [{
    nome: "Charles",
    sobrenome: "dos Santos França",
    username: "charlesfranca89",
    senha: "123123"
}];

// Cria um endpoint
app.get('/usuarios', function(req, res) {
    //console.log(req);
    res.send(
        usuarios
    );
});

// Cria um endpoint
app.post('/usuarios', function(req, res) {
    //console.log(req);
    res.send(
        usuarios
    );
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});