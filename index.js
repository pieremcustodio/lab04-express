var express = require('express');
var app = express();

app.get('/', c_inicio);
app.get('/clientes', c_cliente);
app.get('/productos', c_producto);

function c_inicio(req, res){
    res.send('<h1>Bienvenido</h1>');
}

function c_cliente(req, res){
    res.sendFile(__dirname + '/clientes.html');
}

function c_producto(req, res){
    res.sendFile(__dirname + '/productos.html');
}

function c_server(req, res){
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + ' : '+port);
}

var server = app.listen(9000,c_server);