const { Router } = require("express");
const { createUser, updateUser } = require("../controllers/user.controllers");

const router = Router();

router.post("/api/v1/users", createUser); // controlador
router.put("/api/v1/users/:id", updateUser);

module.exports = router;

// TODO
// * Users
// *   crear usuario
// *   editar usuarios
// ! Posts
// !    Un usuario pueda crear una publicación
//     Un usuario pueda editar una publicación
//  Un usuario pueda obtener todas las publicaciones
// !    Un usuario pueda obtener una publicación con todos sus mensajes
// !    publicación debe incluir su author al igual que el mensaje
//   Answers
//      * Un usuario puede crear una respuesta para una publicación
//      Un usuario pueda editar su respuesta
//      Un usuario pueda eliminar su respuesta
