const Validation = require("../Validation");

class Same extends Validation {
  constructor(as) {
    super();

    this.as = as;
  }

  async handle(attribute, value, data, lang) {
    return value == data[this.as];
  }
}

module.exports = Same;
