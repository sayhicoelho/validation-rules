const Validation = require("../Validation");

class Required extends Validation {
  async handle(attribute, value, data) {
    return !!value;
  }
}

module.exports = Required;
