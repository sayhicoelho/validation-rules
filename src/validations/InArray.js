const Validation = require("../Validation");

class InArray extends Validation {
  constructor(values) {
    super();

    this.values = values;
  }

  get separator() {
    return "or";
  }

  async handle(attribute, value, data, lang) {
    return this.values.includes(value);
  }
}

module.exports = InArray;
