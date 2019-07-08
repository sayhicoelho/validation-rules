const Validation = require("../Validation");

class ArrayExists extends Validation {
  constructor(model) {
    super();

    this.model = model;
  }

  get messages() {
    return {
      en: 'Some of :attribute does not exists in database.',
      pt: 'Alguns valores do campo :attribute não existem em nossa base de dados.'
    }
  }

  async handle(attribute, value, data, lang) {
    const exists =
      (await this.model.countDocuments({
        _id: {
          $in: value
        }
      })) == value.length;

    return exists;
  }
}

module.exports = ArrayExists;
