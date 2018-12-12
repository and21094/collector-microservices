'use strict'

const tokenService = require('../services/token')
const utils = require('../lib/utils')
const boom = require('boom');

/**
 * Login
 * @param {*} req
 * @param {*} res
 */
var login = async (req, res) => {
    const data = await req.body

    if (data.password !== '12345678') {
        throw boom.badRequest('invalid password')
    }

    const token = await tokenService.signToken({ userId: 21 })
    const message = { result: true, token }

    res.json(message);
}

module.exports = {
    login
};