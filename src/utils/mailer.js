const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ian.rosas@academlo.com",
    pass: "dkceudqipgrrkxre",
  },
});

module.exports = transporter;
