
module.exports = app => {

  app.get("*", (req, res) => {
    res.send("Woohoo!")
  })

  ///////////////////////////////////////////////////////////
  // Error Handler
  ///////////////////////////////////////////////////////////
  app.use((err, req, res) => {
    console.error(err.message)
    res.send({ success: false, error: err.message })
  })

}