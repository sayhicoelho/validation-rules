const Validation = require("../Validation");

class Sometimes extends Validation {
  get stopOnFail() {
    return true;
  }

  async handle(attribute, value, data, lang) {
    return typeof data[attribute] !== "undefined";
  }
}

module.exports = Sometimes;
