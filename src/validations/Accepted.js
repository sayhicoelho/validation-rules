const Validation = require("../Validation");

class Accepted extends Validation {
  async handle(attribute, value, data, lang) {
    switch (value) {
      case true:
      case 1:
      case "on":
        return true;
    }

    return false;
  }
}

module.exports = Accepted;
