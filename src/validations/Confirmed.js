const Validation = require("../Validation");

class Confirmed extends Validation {
  constructor(toMatch) {
    super();

    this.toMatch = toMatch;
  }

  async handle(attribute, value, data) {
    return value == data[this.toMatch];
  }
}

module.exports = Confirmed;
