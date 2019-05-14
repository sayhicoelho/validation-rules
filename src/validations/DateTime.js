const moment = require("moment");
const Validation = require("../Validation");

class DateTime extends Validation {
  async handle(attribute, value, data, lang) {
    return (
      moment(value, "YYYY-MM-DD[T]HH:mm", true).isValid() ||
      moment(value, "YYYY-MM-DD[T]HH:mm:ss[Z]", true).isValid()
    );
  }
}

module.exports = DateTime;
