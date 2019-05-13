const Validation = require("../Validation");

class IPv6 extends Validation {
  async handle(attribute, value, data, lang) {
    const pattern = /^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$/;

    return pattern.test(value);
  }
}

module.exports = IPv6;
