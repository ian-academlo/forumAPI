const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers["access-token"];
  if (!token) {
    return next({
      status: 401,
      error: "Unauthorized",
      message: "Not token provided",
    });
  }
  try {
    const decoded = jwt.verify(token, "iannacus", { algorithms: "HS512" });
    // * enviamos la información al siguiente middleware
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = authenticate;
