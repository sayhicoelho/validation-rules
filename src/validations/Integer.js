const Validation = require("../Validation");

class Integer extends Validation {
  async handle(attribute, value, data) {
    return Number.isInteger(value);
  }
}

module.exports = Integer;
