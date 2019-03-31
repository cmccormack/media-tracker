const router = require("express").Router();

module.exports = app => {
  router.get("/", (req, res, next) => {
    res.send("/api");
  });

  router.get("/health", (req, res, next) => {
    res.json({
      success: true,
      message: "Server is running",
    });
  });

  return router;
};
