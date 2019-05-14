const moment = require("moment");
const Validation = require("../Validation");

class DateFormat extends Validation {
  constructor(format) {
    super();

    this.format = format;
  }

  async handle(attribute, value, data, lang) {
    return moment(value, this.format, true).isValid();
  }
}

module.exports = DateFormat;
