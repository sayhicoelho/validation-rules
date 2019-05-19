const Validation = require("../Validation");

class Integer extends Validation {
  async handle(attribute, value, data, lang) {
    return /^\d+$/.test(value);
  }
}

module.exports = Integer;
