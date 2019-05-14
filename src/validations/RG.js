const Validation = require("../Validation");
const { isRG } = require("../common/utils");

class RG extends Validation {
  get name() {
    return "rg";
  }

  async handle(attribute, value, data, lang) {
    return isRG(value);
  }
}

module.exports = RG;
