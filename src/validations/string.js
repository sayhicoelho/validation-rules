const Validation = require("../Validation");

class String extends Validation {
  async handle(attribute, value, data) {
    return typeof value === "string";
  }
}

module.exports = String;
