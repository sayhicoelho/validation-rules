const Validation = require("../Validation");
const { isCNPJ } = require("../common/utils");

class CNPJ extends Validation {
  async handle(attribute, value, data, lang) {
    return isCNPJ(value);
  }
}

module.exports = CNPJ;
