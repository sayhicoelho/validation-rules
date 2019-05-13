const Validation = require("../Validation");
const { isArray } = require("../common/utils");

class Array extends Validation {
  async handle(attribute, value, data, lang) {
    return isArray(value);
  }
}

module.exports = Array;
