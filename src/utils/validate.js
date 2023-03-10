const { validationResult } = require("express-validator");

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    next({
      status: 400,
      name: "Validation error",
      message: error.array().map((error) => error.msg), // * devuelve un arreglo
    });
  }
};

module.exports = validateResult;

// convertir esto
/* 
"message": [
        {
            "msg": "Invalid value",
            "param": "name",
            "location": "body"
        },
        {
            "msg": "No se encuentra el nombre para el usuario",
            "param": "name",
            "location": "body"
        },
    ],

  message": [
        {"msg": "Invalid value"},
        {"msg": "No se encuentra el nombre para el usuario"},
    ],

*/
