const Validation = require("../Validation");

class GreaterThanField extends Validation {
  constructor(field) {
    super();

    this.field = field;
  }

  async handle(attribute, value, data, lang) {
    return value > data[this.field];
  }
}

module.exports = GreaterThanField;
