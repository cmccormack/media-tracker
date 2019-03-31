/** Mount Express routers and utility routes
 * @module routers
 * @requires express
 */

const api_router = require("./api.js")();

module.exports = app => {
  app.use("/api", api_router);
  ///////////////////////////////////////////////////////////
  // Error Handler
  ///////////////////////////////////////////////////////////
  app.use((err, req, res) => {
    console.error(err.message);
    res.send({ success: false, error: err.message });
  });
};
