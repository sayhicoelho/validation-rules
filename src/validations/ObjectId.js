const mongoose = require('mongoose');
const Validation = require("../Validation");

class ObjectId extends Validation {
  get messages() {
    return {
      en: 'The :attribute must be a valid ObjectId.',
      pt: 'O campo :attribute tem que ser um ObjectId válido.'
    }
  }

  async handle(attribute, value, data, lang) {
    return mongoose.Types.ObjectId.isValid(value);
  }
}

module.exports = ObjectId;
