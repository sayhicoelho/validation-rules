const utils = require("../common/utils");
const Validation = require("../Validation");

class Email extends Validation {
  async handle(attribute, value, data, lang) {
    return utils.isEmail(value);
  }
}

module.exports = Email;
