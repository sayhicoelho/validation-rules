const moment = require("moment");
const Validation = require("../Validation");

class Date extends Validation {
  async handle(attribute, value, data, lang) {
    return moment(value, "YYYY-MM-DD", true).isValid();
  }
}

module.exports = Date;
