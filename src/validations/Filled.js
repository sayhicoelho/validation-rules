const Validation = require("../Validation");

class Filled extends Validation {
  async handle(attribute, value, data, lang) {
    if (typeof data[attribute] !== "undefined") return !!value;

    return true;
  }
}

module.exports = Filled;
