'use strict'

const tokenService = require('../services/token')
const utils = require('../lib/utils')
const boom = require('boom');
const Db = require('j4db-controller')
const StandardError = require('standard-error')

/**
 * Login
 * @param {"email": String, "password": String} req
 * @param {*} res
 */
var login = async (req, res) => {
    const data = await req.body

    // TODO get user by email
    const user = {
        id: 21,
        email: 'and21094@gmail.com',
        password: '12345678'
    }

    if (!user) {
        throw boom.badRequest('Invalid data')
    }

    if (data.password !== user.password) {
        throw boom.badRequest('Invalid data')
    }

    const token = await tokenService.signToken({ userId: user.id })
    const message = { result: true, token }

    res.json(message);
}

/**
 * signup
 * @param {*} req
 * @param {*} res
 */
var signup = async (req, res) => {
    const db = new Db()
    const data = req.body

    try {
        if (!data.name || !data.email || !data.password) {
            throw new Error('Data information is missing')
        }

        const user = await db.users.save(data)
        res.json({ result: true, message: 'signup done' });

    } catch (err) {
        throw new StandardError(err.message, {
            code: err.errorCode || 'E_UNKNOWN_ERROR',
            originalStack: err.stack || null,
        })
    }
}

/**
 * resetPassword
 * @param {"userId": int, "password": String, "newPassword": String, "token": token} req
 * @param {*} res
 */
var resetPassword = async (req, res) => {
    const data = req.body
    const encoded = await tokenService.verifyToken(data.token)

    if (encoded && parseInt(data.userId, 10) !== encoded.userId) {
        throw boom.unauthorized('Invalid user')
    }

    // TODO get user data
    const user = {
        password: '12345678'
    }

    if (data.password && data.password !== user.password) {
        throw boom.badRequest('Invalid Data')
    }

    // TODO validate new password
    if (data.newPassword && true) {
        user.password = data.newPassword
    } else {
        throw boom.badRequest('Invalid Data')
    }

    // TODO save new password

    res.json({ result: true, message: 'reset password done' });
}

module.exports = {
    login,
    signup,
    resetPassword
};