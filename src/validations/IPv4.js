const Validation = require("../Validation");

class IPv4 extends Validation {
  get name() {
    return "ipv4";
  }

  async handle(attribute, value, data, lang) {
    const pattern = /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})){3}$/;

    return pattern.test(value);
  }
}

module.exports = IPv4;
