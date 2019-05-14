const Validation = require("../Validation");

class UUID extends Validation {
  get name() {
    return "uuid";
  }

  async handle(attribute, value, data, lang) {
    const pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    return pattern.test(value);
  }
}

module.exports = UUID;
