const Validation = require("../Validation");
const { hasDuplicates } = require("../common/utils");

class Distinct extends Validation {
  async handle(attribute, value, data, lang) {
    return !hasDuplicates(value);
  }
}

module.exports = Distinct;
