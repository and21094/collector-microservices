'use strict'
const app = require('./app')
const port = process.env.PORT || 3080
app.listen(port, () => 
  console.log(`Test service is listening on port ${port}.`)
)