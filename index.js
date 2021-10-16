const express = require("express");

const app = express();

// Conexão com Banco de dados
const mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user: 'root',
	password: '123',
	database: 'my_node'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

//realizando uma consulta no Bd
connection.query('SELECT * FROM usuario', function(err, rows, fields){
	if(!err){
			console.log("Resultado: ", rows);
	}else{
			console.log("Erro ao realizar a consulta");
	}
});

// Fazendo um insert manualmente no BD
connection.query("INSERT INTO usuario(nome, email) VALUES ('Carlos','carlos@gmail.com')", function(err,result){
	if(!err){
		console.log("Usuario cadastrado com sucesso!");
	}else{
		console.log("Erro ao cadastrar o usurario!");
	}
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









/* carregando um servidor http
var http = require('http');

http.createServer(function(req, res){
	res.end("Gerenciador Financeiro");

}).listen(8080); //Ativar o sevidor no terminal
*/





//TESTES INICIAIS

/*console.log("Gerneciador financeiro");

var client = "José Benedito";

console.log("Cliente:" + client);

var valProduct = 100;
var valDiscont = 37;


//incluindo o modulos
var discountFunc = require("./modulos/callDisconto");

//aplicando a função

var finalValue = discountFunc(valProduct, valDiscont);

console.log("Valor final do produto: R$ "+finalValue); */