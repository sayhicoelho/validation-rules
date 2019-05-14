const Validation = require("../Validation");

class URL extends Validation {
  get name() {
    return "url";
  }

  async handle(attribute, value, data, lang) {
    const pattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;

    return pattern.test(value);
  }
}

module.exports = URL;
