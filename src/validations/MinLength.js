const Validation = require("../Validation");

class MinLength extends Validation {
  constructor(min) {
    super();

    this.min = min;
  }

  async handle(attribute, value, data, lang) {
    return value.length >= this.min;
  }
}

module.exports = MinLength;
