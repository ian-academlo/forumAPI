const UsersServices = require("../services/user.services");

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.create(newUser);
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
    const { name, lastname } = req.body;
    // tengo que ir al modelo para consultar la informacion
    await UsersServices.update(id, { name, lastname });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createUser,
  updateUser,
};
