const Validation = require("../Validation");
const { isCPF } = require("../common/utils");

class CPF extends Validation {
  async handle(attribute, value, data, lang) {
    return isCPF(value);
  }
}

module.exports = CPF;
