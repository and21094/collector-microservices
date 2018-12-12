'use strict'

const tokenService = require('../services/token')
const utils = require('../lib/utils')

/**
 * Login
 * @param {*} req
 * @param {*} res
 */
var login = async (req, res) => {
    const data = req.body

    if (data.password === '12345678') {
        const token = await tokenService.signToken({ userId: 21 })
        res.status(200).send({ message: 'nois', token });
    }

    res.status(500).send({ message: 'wrong user or password' });
}

/**
 * signup
 * @param {*} req
 * @param {*} res
 */
var signup = async (req, res) => {
    const data = req.body

    // if (data.password === '12345678') {
    //     const token = await tokenService.signToken({ userId: 21 })
    res.status(200).send({ message: 'signup done', data });
    // }

    // res.status(500).send({ message: 'wrong user or password' });
}

module.exports = {
    login,
    signup
};