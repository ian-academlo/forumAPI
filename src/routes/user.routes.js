const { Router } = require("express");
const { createUser } = require("../controllers/user.controllers");

const router = Router();

router.post("/api/v1/users", createUser); // controlador

module.exports = router;

// TODO
// * Users
// *   crear usuario
// *   editar usuarios
// ! Posts
// !    Un usuario pueda crear una publicación
// !    Un usuario pueda editar una publicación
// !    Un usuario pueda obtener todas las publicaciones
// !    Un pueda obtener una publicación con todos sus mensajes
//   Answers
//      Un usuario puede crear una respuesta para una publicación
//      Un usuario pueda editar su respuesta
//      Un usuario pueda eliminar su respuesta
