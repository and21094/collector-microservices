'use strict'
const express = require('express')
const app = express();
const controller = require('../controllers/auth');

// API Routes
app.post('/login', controller.login);
app.post('/signup', controller.signup);

module.exports = app;