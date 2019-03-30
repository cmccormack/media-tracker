const express = require("express");
require("dotenv").config();

///////////////////////////////////////////////////////////
//  Initialize Express and configure Middleware
///////////////////////////////////////////////////////////
const app = express();
app.set("port", process.env.PORT || 3000);

require("./routes/routes.js")(app);

///////////////////////////////////////////////////////////
//  Start Express Server
///////////////////////////////////////////////////////////
const server = app.listen(app.get("port"), err => {
  if (err) {
    console.error(err);
  }
  const { port } = server.address();
  console.info(`✅  Server started on port ${port}`);
});

module.exports = server;
