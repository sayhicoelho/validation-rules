const Validation = require("../Validation");

class Unique extends Validation {
  constructor(model, ignoreId = null) {
    super();

    this.model = model;
    this.ignoreId = ignoreId;
  }

  async handle(attribute, value, data) {
    const exists =
      (await this.model.countDocuments({
        _id: { $ne: this.ignoreId },
        [attribute]: value
      })) > 0;

    return !exists;
  }
}

module.exports = Unique;
