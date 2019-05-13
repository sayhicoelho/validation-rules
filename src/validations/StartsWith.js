const Validation = require("../Validation");

class StartsWith extends Validation {
  constructor(starts) {
    super();

    this.starts = starts;
  }

  get separator() {
    return "or";
  }

  async handle(attribute, value, data, lang) {
    if (typeof this.starts === "string") return value.startsWith(this.starts);

    for (let startWith of this.starts) {
      if (value.startsWith(startWith)) return true;
    }

    return false;
  }
}

module.exports = StartsWith;
