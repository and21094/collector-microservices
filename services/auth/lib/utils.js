const bcrypt = require('bcrypt')
const utf8 = require('utf8');
const errors = require('./local-error')

const saltRounds = 10


module.exports.encryptPassword = async function encrypt(password) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(utf8.encode(password), salt, (err, hash) => {
                if (err) return reject('err encryption', err)

                return resolve(hash)
            })
        })
    })
}

module.exports.getError = async function getError(code, errorDescription) {
    return new Promise(resolve => {

        const err = {}
        console.log('dsadasda', errors[code])
        const { errorCode, errorMessage } = errors[code].en

        err.errorCode = errorCode
        err.message = !errorDescription ? errorMessage : `${errorMessage}: ${errorDescription}`

        resolve(err)
    })
}