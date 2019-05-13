const Validation = require("../Validation");

class Different extends Validation {
  constructor(than) {
    super();

    this.than = than;
  }

  async handle(attribute, value, data, lang) {
    return value != data[this.than];
  }
}

module.exports = Different;
