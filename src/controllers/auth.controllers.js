const UserServices = require("../services/user.services");
const bcrypt = require("bcrypt");

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserServices.getUser(email);
    if (!user) {
      return next({
        status: 400,
        message: "Invalid email",
        error: "User not found",
      });
    }
    // ? donde tenemos la contraseña hasehada
    // * user.password
    // ? donde tenemos la contraseña en texto plano
    // * password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return next({
        status: 400,
        message: "The password doesn't match with email user",
        error: "Invalid password",
      });
    }
    const { id, name, lastname, username } = user;
    res.json({
      id,
      name,
      lastname,
      username,
      email,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userLogin,
};
