const Validation = require("../Validation");

class NotInArray extends Validation {
  constructor(values) {
    super();

    this.values = values;
  }

  get separator() {
    return "or";
  }

  async handle(attribute, value, data, lang) {
    return !this.values.includes(value);
  }
}

module.exports = NotInArray;
