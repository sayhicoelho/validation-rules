const Validation = require("../Validation");
const { isValidTimeZone } = require("../common/utils");

class TimeZone extends Validation {
  async handle(attribute, value, data, lang) {
    return isValidTimeZone(value);
  }
}

module.exports = TimeZone;
