const Validation = require("../Validation");
const { isRG } = require("../common/utils");

class RG extends Validation {
  async handle(attribute, value, data) {
    return isRG(value);
  }
}

module.exports = RG;
