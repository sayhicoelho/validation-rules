const BaseRule = require("./BaseRule");
const Required = require("./validations/Required");
const String = require("./validations/String");
const Email = require("./validations/Email");
const Confirmed = require("./validations/Confirmed");
const MinLength = require("./validations/MinLength");
const MaxLength = require("./validations/MaxLength");
const Length = require("./validations/Length");
const Unique = require("./validations/Unique");
const Phone = require("./validations/Phone");
const Accepted = require("./validations/Accepted");
const Integer = require("./validations/Integer");
const Double = require("./validations/Double");
const Boolean = require("./validations/Boolean");
const Array = require("./validations/Array");
const CNPJ = require("./validations/CNPJ");
const CPF = require("./validations/CPF");
const RG = require("./validations/RG");
const CEP = require("./validations/CEP");

class Rule extends BaseRule {
  array() {
    return this.registerValidation(new Array());
  }

  cep() {
    return this.registerValidation(new CEP());
  }

  cnpj() {
    return this.registerValidation(new CNPJ());
  }

  cpf() {
    return this.registerValidation(new CPF());
  }

  rg() {
    return this.registerValidation(new RG());
  }

  required() {
    return this.registerValidation(new Required());
  }

  string() {
    return this.registerValidation(new String());
  }

  email() {
    return this.registerValidation(new Email());
  }

  confirmed(toMatch) {
    return this.registerValidation(new Confirmed(toMatch));
  }

  minlength(min) {
    return this.registerValidation(new MinLength(min));
  }

  maxlength(max) {
    return this.registerValidation(new MaxLength(max));
  }

  length(length) {
    return this.registerValidation(new Length(length));
  }

  unique(model, ignoreId = null) {
    return this.registerValidation(new Unique(model, ignoreId));
  }

  phone() {
    return this.registerValidation(new Phone());
  }

  accepted() {
    return this.registerValidation(new Accepted());
  }

  integer() {
    return this.registerValidation(new Integer());
  }

  double() {
    return this.registerValidation(new Double());
  }

  boolean() {
    return this.registerValidation(new Boolean());
  }
}

module.exports = Rule;
