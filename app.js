const express = require("express");

const app = express();

// Conexão com Banco de dados
const mysql = require('msql');

var connection = mysql.createConnection({
	host:'localhost',
	user: 'root',
	password: '123',
	database: 'cadastro_node'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});





app.get("/", function(req, res){
	res.sendFile(__dirname + "/src/index.html");
});

//inserido rotas

app.get("/contato", function(req, res){
	res.send("Pagina de contato");
});

app.get("/blog", function(req, res){
	res.send("Pagina do blog");
});

app.get("/sobre", function(req, res){
	res.sendFile(__dirname + "./src/sobre.html");
});




app.listen(8080);




