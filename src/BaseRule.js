class BaseRule {
  constructor(attribute) {
    this.attribute = attribute;
    this.validations = [];
  }

  registerValidation(name, ...params) {
    this.validations.push({ name, params });

    return this;
  }
}

module.exports = BaseRule;
