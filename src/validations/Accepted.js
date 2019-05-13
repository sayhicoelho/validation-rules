const Validation = require("../Validation");

class Accepted extends Validation {
  async handle(attribute, value, data) {
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
