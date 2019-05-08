const Validation = require("../Validation");

class Phone extends Validation {
  async handle(attribute, value, data) {
    const pattern = /^[0-9]{13}$/;

    return pattern.test(value);
  }
}

module.exports = Phone;
