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
const Different = require("./validations/Different");
const Same = require("./validations/Same");
const IP = require("./validations/IP");
const IPv4 = require("./validations/IPv4");
const IPv6 = require("./validations/IPv6");
const MACAddress = require("./validations/MACAddress");
const UUID = require("./validations/UUID");
const StartsWith = require("./validations/StartsWith");
const EndsWith = require("./validations/EndsWith");
const Slug = require("./validations/Slug");

class Rule extends BaseRule {
  array() {
    return this.registerValidation(new Array());
  }

  slug() {
    return this.registerValidation(new Slug());
  }

  startsWith(starts) {
    return this.registerValidation(new StartsWith(starts));
  }

  endsWith(ends) {
    return this.registerValidation(new EndsWith(ends));
  }

  UUID() {
    return this.registerValidation(new UUID());
  }

  MACAddress() {
    return this.registerValidation(new MACAddress());
  }

  IP() {
    return this.registerValidation(new IP());
  }

  IPv4() {
    return this.registerValidation(new IPv4());
  }

  IPv6() {
    return this.registerValidation(new IPv6());
  }

  cep() {
    return this.registerValidation(new CEP());
  }

  different(than) {
    return this.registerValidation(new Different(than));
  }

  same(as) {
    return this.registerValidation(new Same(as));
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
