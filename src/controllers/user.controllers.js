const UsersServices = require("../services/user.services");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    // newUser = { email, username, password }
    // * encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const paswordHash = await bcrypt.hash(newUser.password, salt);
    // * finaliza encripta la contraseña

    // const result = await UsersServices.create(newUser);
    res.status(201).json(paswordHash);
  } catch (error) {
    next(error);
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
