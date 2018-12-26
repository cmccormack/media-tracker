const express = require('express')
require('dotenv').config()

///////////////////////////////////////////////////////////
//  Initialize Express and configure Middleware
///////////////////////////////////////////////////////////
const app = express()
app.set('port', process.env.PORT || 3000)

require('./routes/routes.js')(app)

///////////////////////////////////////////////////////////
//  Start Express Server
///////////////////////////////////////////////////////////
const server = app.listen(app.get('port'), (err, blah) => {
  const {port, address} = server.address()
  console.log(`Server started on port ${port}`)
})