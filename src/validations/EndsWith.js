const Validation = require("../Validation");

class EndsWith extends Validation {
  constructor(ends) {
    super();

    this.ends = ends;
  }

  get separator() {
    return "or";
  }

  async handle(attribute, value, data, lang) {
    if (typeof this.ends === "string") return value.endsWith(this.ends);

    for (let endWith of this.ends) {
      if (value.endsWith(endWith)) return true;
    }

    return false;
  }
}

module.exports = EndsWith;
