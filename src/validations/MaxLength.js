const Validation = require("../Validation");

class MaxLength extends Validation {
  constructor(max) {
    super();

    this.max = max;
  }

  async handle(attribute, value, data, lang) {
    return value.length <= this.max;
  }
}

module.exports = MaxLength;
