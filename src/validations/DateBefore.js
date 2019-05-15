const moment = require("moment");
const Validation = require("../Validation");

class DateBefore extends Validation {
  constructor(datetime) {
    super();

    this.datetime = datetime;
  }

  async handle(attribute, value, data, lang) {
    return moment(value).isBefore(this.datetime);
  }
}

module.exports = DateBefore;
