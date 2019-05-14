const { isValidJSON } = require("../common/utils");
const Validation = require("../Validation");

class JSON extends Validation {
  get name() {
    return "json";
  }

  async handle(attribute, value, data, lang) {
    return isValidJSON(value);
  }
}

module.exports = JSON;
