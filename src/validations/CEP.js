const Validation = require("../Validation");
const { isCEP } = require("../common/utils");

class CEP extends Validation {
  async handle(attribute, value, data) {
    return isCEP(value);
  }
}

module.exports = CEP;
