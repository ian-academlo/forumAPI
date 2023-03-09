const {
  ValidationError,
  DatabaseError,
  BaseError,
  ConnectionError,
  ConnectionAcquireTimeoutError,
  ConnectionRefusedError,
  ConnectionTimedOutError,
  InvalidConnectionError,
} = require("sequelize");

// TODO una funcion para loggear lo errores ( console.log() )

const logError = (error, req, res, next) => {
  console.log(error);
  next(error);
};

module.exports = {
  logError,
};
