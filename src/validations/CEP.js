const Validation = require("../Validation");
const { isCEP } = require("../common/utils");

class CEP extends Validation {
  get name() {
    return "cep";
  }

  async handle(attribute, value, data, lang) {
    return isCEP(value);
  }
}

module.exports = CEP;
