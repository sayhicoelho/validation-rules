const Validation = require("../Validation");

class Nullable extends Validation {
  get stopOnFail() {
    return true;
  }

  async handle(attribute, value, data, lang) {
    if (!value) {
      data[attribute] = null;

      return false;
    }

    return true;
  }
}

module.exports = Nullable;
