const Validation = require("../Validation");

class Boolean extends Validation {
  async handle(attribute, value, data, lang) {
    return typeof value === "boolean";
  }
}

module.exports = Boolean;
