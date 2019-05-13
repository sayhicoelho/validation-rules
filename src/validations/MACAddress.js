const Validation = require("../Validation");

class MACAddress extends Validation {
  async handle(attribute, value, data, lang) {
    const pattern = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/;

    return pattern.test(value);
  }
}

module.exports = MACAddress;
