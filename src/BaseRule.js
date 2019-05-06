class BaseRule {
  constructor(attribute) {
    this.attribute = attribute;
    this.validations = [];
  }

  registerValidation(validation) {
    this.validations.push(validation);
  }
}

module.exports = BaseRule;
