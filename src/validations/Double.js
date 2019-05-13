const Validation = require("../Validation");

class Double extends Validation {
  async handle(attribute, value, data, lang) {
    return /^\d{1,8}(\.\d{1,2})?$/.test(value);
  }
}

module.exports = Double;
