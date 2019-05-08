class BaseRule {
  constructor(attribute) {
    this.attribute = attribute;
    this.validations = [];
  }

  registerValidation(instance) {
    this.validations.push(instance);

    return this;
  }
}

module.exports = BaseRule;
