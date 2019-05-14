const Validation = require("../Validation");

class RequiredWithout extends Validation {
  constructor(fields) {
    super();

    this.fields = fields;
  }

  async handle(attribute, value, data, lang) {
    for (let field of this.fields) {
      if (!data[field]) return !!value;
    }

    return true;
  }
}

module.exports = RequiredWithout;
