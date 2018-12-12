const bcrypt = require('bcrypt')
const utf8 = require('utf8');

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