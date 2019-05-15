const moment = require("moment");
const Validation = require("../Validation");

class ISODate extends Validation {
  get name() {
    return "isoDate";
  }

  async handle(attribute, value, data, lang) {
    return moment(value, moment.ISO_8601, true).isValid();
  }
}

module.exports = ISODate;
