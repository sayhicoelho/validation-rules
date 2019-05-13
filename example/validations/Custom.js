const { Validation } = require("../..");

class Custom extends Validation {
  constructor(param) {
    super();

    this.param = param;
  }

  get messages() {
    return {
      en: "The :attribute value must be :param.",
      pt: "O campo :attribute precisa ser igual a :param."
    };
  }

  async handle(attribute, value, data) {
    return this.param == value;
  }
}

module.exports = Custom;
