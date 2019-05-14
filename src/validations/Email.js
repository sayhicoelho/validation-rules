const { isEmail } = require("../common/utils");
const Validation = require("../Validation");

class Email extends Validation {
  async handle(attribute, value, data, lang) {
    return isEmail(value);
  }
}

module.exports = Email;
