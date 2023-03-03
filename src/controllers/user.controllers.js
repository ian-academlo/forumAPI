const UsersServices = require("../services/user.services");

const createUser = async (req, res) => {
  try {
    // un cli nos manda la información
    // en el cuerpo de una petición
    // Nosotros la obtenemos en req.body
    const newUser = req.body;
    // consultamos al modelo para realizar la operación
    const result = await UsersServices.create(newUser);
    // se encarga de dar respuesta
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    // necesitamos el id del usuario
    const { id } = req.params;
    // la información a actualizar
    const updateUserData = req.body;
    // tengo que ir al modelo para consultar la informacion
    await UsersServices.update(id, updateUserData);
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createUser,
  updateUser,
};
