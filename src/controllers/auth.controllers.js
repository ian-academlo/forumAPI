const UserServices = require("../services/user.services");
const AuthServices = require("../services/auth.services");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserServices.getUser(email);
    // verifico si existe un usuario
    if (!user) {
      return next({
        status: 400,
        message: "Invalid email",
        errorName: "User not found",
      });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return next({
        status: 400,
        message: "The password doesn't match with email user",
        errorName: "Invalid password",
      });
    }
    if (!user.emailVerified) {
      return next({
        status: 400,
        message: "User email is not verified",
        errorName: "Email verification",
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

const verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.body;
    console.log(token);
    // TODO verificar toquen
    const userData = await jwt.verify(token, "iannacus", {
      algorithms: "HS512",
    });

    const user = UserServices.getUser(userData.email);
    // si el usuario ya se verifico --> envia un error
    if (user.emailVerified) {
      return next({
        status: 400,
        message: "User is already verified",
        errorName: "Failed to verify email",
      });
    }
    // si no se ha verificado --> actualiza el estado de emailVerified
    await UserServices.update(userData.id, {
      emailVerified: true,
    });

    res.status(204).send();
  } catch (error) {
    next({
      status: 400,
      message: "Invalid or expired token",
      errorName: error,
    });
  }
};

module.exports = {
  userLogin,
  verifyEmail,
};
