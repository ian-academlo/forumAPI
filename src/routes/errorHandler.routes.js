const {
  logError,
  errorHandler,
  ormErrorHandler,
} = require("../middlewares/error.handler");

// recibimos la instancia de la aplicacion
// que creamos en app.js
const errorHandlerRouter = (app) => {
  app.use(logError);
  app.use(ormErrorHandler);
  app.use(errorHandler);

  app.use("*", (req, res) => {
    return res
      .status(404)
      .send("El backend se ha olvidado de esta ruta o quizas nunca la haga");
  });
};

module.exports = errorHandlerRouter;
