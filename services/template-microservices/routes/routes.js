'use strict'
const express = require('express')
const app = express();
const demoController = require('../controllers/demo');

// API Routes
app.get('/', demoController.hello);
app.get('/microservices', demoController.hello);

module.exports = app;