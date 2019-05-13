const Validation = require("../Validation");

class Regex extends Validation {
  constructor(pattern) {
    super();

    this.pattern = pattern;
  }

  async handle(attribute, value, data) {
    return this.pattern.test(value);
  }
}

module.exports = Regex;
