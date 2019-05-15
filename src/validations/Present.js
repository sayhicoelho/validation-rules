const Validation = require("../Validation");

class Present extends Validation {
  async handle(attribute, value, data, lang) {
    return typeof data[attribute] !== "undefined";
  }
}

module.exports = Present;
