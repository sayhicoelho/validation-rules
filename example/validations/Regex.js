const { Validation } = require("../..");

class Regex extends Validation {
  constructor(pattern) {
    super();

    this.pattern = pattern;
  }

  get messages() {
    return {
      en: "The :attribute format is invalid.",
      pt: "O formato do campo :attribute é inválido."
    };
  }

  async handle(attribute, value, data) {
    return this.pattern.test(value);
  }
}

module.exports = Regex;
