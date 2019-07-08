const mongoose = require('mongoose');
const Validation = require("../Validation");

class ArrayObjectId extends Validation {
  constructor(model) {
    super();

    this.model = model;
  }

  get messages() {
    return {
      en: 'Some of :attribute is not a valid ObjectId.',
      pt: 'Alguns valores do campo :attribute não são um ObjectId válido.'
    }
  }

  async handle(attribute, values, data, lang) {
    for (let value of values) {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        return false;
      }
    }

    return true;
  }
}

module.exports = ArrayObjectId;
