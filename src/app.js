const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
app.use('/', index);
app.use('/persons', personRoute);
app.use('/api/Carros',require('./routes/Carros'));//configurando o endereco /api/

app.set('json spaces',2); // serve p/ ordenar os objetos impreso


module.exports = app;