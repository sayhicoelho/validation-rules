const Validation = require("../Validation");

class RequiredWithoutAll extends Validation {
  constructor(fields) {
    super();

    this.fields = fields;
  }

  async handle(attribute, value, data, lang) {
    for (let field of this.fields) {
      if (!!data[field]) return true;
    }

    return !!value;
  }
}

module.exports = RequiredWithoutAll;
