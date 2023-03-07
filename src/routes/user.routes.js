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
// * Posts
// *    Un usuario pueda crear una publicación
// TODO Un usuario pueda editar una publicación
// TODO Un usuario pueda obtener todas las publicaciones
// !    Un usuario pueda obtener una publicación con todos sus mensajes
// !    publicación debe incluir su author al igual que el mensaje
//   Answers
//      * Un usuario puede crear una respuesta para una publicación
// TODO     Un usuario pueda editar su respuesta
//  TODO    Un usuario pueda eliminar su respuesta

/* 
 INICIO

 publicacion 1 - deportes - author - date
 publicacion 2 - computacion - author - date
 publicacion 3 - salud - authro - date
 .
 ,
 ,
 publiacion 20 - salud -author - date

 categoria 1 ( computación )
 categoria 2 (salud)
 categoria 3
 .
 .
 .
 categoria n

 post 1 - computacion - date - author
 post 2 - computacion - date - author
 post 3 - computacion - date - author
 post 4 - computacion - date - author

 post 1 - salud - date - author
 post 2 - salud - date - author
 post 3 - salud - date - author
 post 4 - salud - date - author


 title post 
 alsñdkjfalsdkjflsadñjflsdafjlsdafjsd
 alskdñjfldsñjflñsdafjlsadfjdlsakfjsldafjsdlfjsa
 aslkdjfsañldfjaslñdfjsalñdfjsdlfjsd

 message 1
 message2
 message 3
 message 4

*/
