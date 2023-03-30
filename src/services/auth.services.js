const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthServices {
  static genToken(payload) {
    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        algorithm: "HS512",
        expiresIn: "1d",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
