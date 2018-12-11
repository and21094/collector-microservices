'use strict'

// hello function example
var hello = (req, res) => {
    res.status(200).send({message: 'Hello microservices'});
}

module.exports = {hello};