const Validation = require("../Validation");

class Confirmed extends Validation {
  async handle(attribute, value, data) {
    return value == data[toMatch];
  }
}

module.exports = Confirmed;
