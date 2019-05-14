const Validation = require("../Validation");

class GreaterThan extends Validation {
  constructor(value) {
    super();

    this.value = value;
  }

  async handle(attribute, value, data, lang) {
    return value > this.value;
  }
}

module.exports = GreaterThan;
