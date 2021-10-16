INSTRUÇÕES:

1) instalar o node

2) abrir um servido http com as instruções: 

var http = require('http');

http.createServer(function(req, res){
	res.end("Gerenciador Financeiro");

}).listen(8080); //Ativar o sevidor no terminal (ver a documentação oficial)

3) instalar o Expressjs
para usar as rotas(do site oficial- expressjs.com)

instalar no projeto

$ npm install express --save

4) instalar o Nodemonjs para ativar o servidor automaticamente

$ npm install -g nodemon 

obs: executar no terminal -
$ nodemon [o nome do arquivo js


6) ROTAS PARA AQUIVOS HTML

const express = require("express");

const app = express();

app.get("/", function(req, res){
	res.sendFile(__dirname + "/src/index.html");
});

FAZENDO A CONEXÃO COM O BD MYSQL

7) instalado o aquivo de configuração
$ npm init

8) instalando a extensão do drive do mysql
(verificar as instruções de ativação na documentação oficial: https//npmjs.com)

$ npm install mysql --save

BANCO DE DADOS MYSQL

systemctl start mariadb // iniciando o banco de dados mariadb
host: 'localhost'
user: 'root'
senha: '123'
BD: [o nome do banco de dados]


CONFIGURANDO PERMISSÕES PARA O NOVO ROOT DO MYSQL NO TERMINAL(ver documentação do mariadb)
mysql -h localhost -u root -p // -h= host -u= usuário -p= senha

$ CREATE USER 'benedito'@'localhost' IDENTIFIED WITH mysql_native_password BY 'jsbach'; //criando um user (benedito) com a senha (jsbach)

/ Conexão com Banco de dados
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
