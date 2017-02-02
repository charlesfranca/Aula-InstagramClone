// Importação da biblioteca do express para dentro do nosso código
var express = require('express');

// Biblioteca que possibilita/libera o acesso
// a api por servidores externos
var cors = require('cors')
var app = express();
app.use(cors())

// Biblioteca que possibilita a extração dos parâmetros enviados pelo app/website
// via body no formato json
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded

// Vetor de usuarios
var usuarios = [];

// Cria um endpoint(URL) com o metodo get que geralmente é usado para 
// listar ou retornar informação
// Essa Url estará acessivel no endereço http://localhost:3000/usuarios
app.get('/usuarios', function(req, res) {
    //console.log(req);
    res.send(
        usuarios
    );
});

// Cria um endpoint com o método POST que consegue receber um body com informações
// enviadas pelo app ou site para serem processadas pelo servidor.
app.post('/usuarios', function(req, res) {
    // Criação da váriavel usuario para cadastrar no nosso vetor
    // req.body.nome é uma variavel enviada no corpo da requisição pelo usuário
    var erros = [];
    if (!req.body.nome) {
        erros.push("Nome não informado");
    }
    if (!req.body.sobrenome) {
        erros.push("sobrenome não informado");
    }
    if (!req.body.username) {
        erros.push("username não informado");
    }
    if (!req.body.senha) {
        erros.push("senha não informada");
    }

    var regex = new RegExp(/\D/, 'i');
    if (regex.test(req.body.senha)) {
        erros.push("senha contém caracteres alphanuméricos");
    }

    if (erros.length > 0) {
        res.send({
            status: false,
            erros: erros
        });
    } else {
        var usuario = {
                nome: req.body.nome,
                sobrenome: req.body.sobrenome,
                username: req.body.username,
                senha: req.body.senha
            }
            // Grava o usuário no vetor
        usuarios.push(usuario);

        // Devolve uma resposta para o app ou site que esta fazendo a requisição
        res.send({
            status: true,
            usuarios: usuarios
        });
    }

    //console.log(req.body);
});

// Inicia o servidor
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});