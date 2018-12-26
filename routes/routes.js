
module.exports = app => {

  app.get('*', (req, res, next) => {
    res.send('Woohoo!')
  })

  ///////////////////////////////////////////////////////////
  // Error Handler
  ///////////////////////////////////////////////////////////
  app.use((err, req, res, next) => {
    console.error(err.message)
    res.send({ success: false, error: err.message })
  })

}