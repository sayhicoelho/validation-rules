const Validation = require("../Validation");

class Slug extends Validation {
  async handle(attribute, value, data, lang) {
    const pattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/g;

    return pattern.test(value);
  }
}

module.exports = Slug;
