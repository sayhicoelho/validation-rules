const Validation = require("../Validation");

class Exists extends Validation {
  constructor(model) {
    super();

    this.model = model;
  }

  get messages() {
    return {
      en: 'The :attribute does not exists in database.',
      pt: 'O campo :attribute não existe em nossa base de dados.'
    }
  }

  async handle(attribute, value, data, lang) {
    const exists =
      (await this.model.countDocuments({
        _id: value
      })) > 0;

    return exists;
  }
}

module.exports = Exists;
