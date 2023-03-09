const { logError } = require("../middlewares/error.handler");

// recibimos la instancia de la aplicacion
// que creamos en app.js
const errorHandlerRouter = (app) => {
  app.use(logError);

  app.use((error, req, res, next) => {
    res.status(400).json(error);
  });
};

module.exports = errorHandlerRouter;
