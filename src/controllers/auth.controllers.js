const UserServices = require("../services/user.services");
const AuthServices = require("../services/auth.services");
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
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return next({
        status: 400,
        message: "The password doesn't match with email user",
        error: "Invalid password",
      });
    }
    const { id, name, lastname, username } = user;
    // TODO genera un token y enviarlo al usuario
    const token = AuthServices.genToken({ id, name, lastname, username });
    res.json({
      id,
      name,
      lastname,
      username,
      email,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userLogin,
};
