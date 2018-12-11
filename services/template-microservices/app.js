'use strict'
const express = require('express')
const app = express();
const bodyParser  = require('body-parser');
const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Set headers
app.use( (req,res,next) =>{
	res.setHeader('Access-Control-Allow-Origin', "*");
	res.header("Access-Control-Allow-Headers", "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Acces-Control-Request-Method");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.header("Allow", "GET, POST, PUT, DELETE");
    next();
})

app.use('/hello',routes);

module.exports = app;