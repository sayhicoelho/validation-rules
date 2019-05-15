const Validation = require("../Validation");

class Timestamp extends Validation {
  async handle(attribute, value, data, lang) {
    return value.toString().replace(/\D/g, "").length === 13;
  }
}

module.exports = Timestamp;
