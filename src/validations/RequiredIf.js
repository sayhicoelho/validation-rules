const Validation = require("../Validation");

class RequiredIf extends Validation {
  constructor(field, value) {
    super();

    this.field = field;
    this.value = value;
  }

  async handle(attribute, value, data, lang) {
    if (data[this.field] == this.value) return !!value;

    return true;
  }
}

module.exports = RequiredIf;
