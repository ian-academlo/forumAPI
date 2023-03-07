const Answers = require("../models/answer.models");

class AnswerServices {
  static async create(newAnswer) {
    try {
      const result = await Answers.create(newAnswer);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = Answers.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AnswerServices;
