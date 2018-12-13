'use strict'
const express = require('express')
const app = express();
const controller = require('../controllers/auth');
const boom = require('boom');

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
        if (!err.isBoom) {
            return next(boom.badImplementation(err))
        }

        next(err)
    })
}

// API Routes
app.post('/login', asyncMiddleware(controller.login));
app.post('/signup',  asyncMiddleware(controller.signup));
app.post('/resetPassword',  asyncMiddleware(controller.resetPassword));

module.exports = app;