const Validation = require("../Validation");

class Phone extends Validation {
  async handle(attribute, value, data, lang) {
    value = value.replace(/[^\d]+/g, "");

    switch (lang) {
      case "en":
        return /^[0-9]{11}$/.test(value);
      case "pt":
        return /^[0-9]{12,13}$/.test(value);
      default:
        return /^[0-9]{12}$/.test(value);
    }
  }
}

module.exports = Phone;
