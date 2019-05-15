const moment = require("moment");
const Validation = require("../Validation");

class DateAfter extends Validation {
  constructor(datetime) {
    super();

    this.datetime = datetime;
  }

  async handle(attribute, value, data, lang) {
    return moment(value).isAfter(this.datetime);
  }
}

module.exports = DateAfter;
