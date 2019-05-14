const Validation = require("../Validation");

class RequiredWithAll extends Validation {
  constructor(fields) {
    super();

    this.fields = fields;
  }

  async handle(attribute, value, data, lang) {
    for (let field of this.fields) {
      if (!data[field]) return true;
    }

    return !!value;
  }
}

module.exports = RequiredWithAll;
