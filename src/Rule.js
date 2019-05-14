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
const URL = require("./validations/URL");
const TimeZone = require("./validations/TimeZone");
const Distinct = require("./validations/Distinct");
const InArray = require("./validations/InArray");
const NotInArray = require("./validations/NotInArray");
const JSON = require("./validations/JSON");
const GreaterThan = require("./validations/GreaterThan");

class Rule extends BaseRule {
  greaterThan(value) {
    return this.registerValidation(new GreaterThan(value));
  }

  json() {
    return this.registerValidation(new JSON());
  }

  notInArray(values) {
    return this.registerValidation(new NotInArray(values));
  }

  inArray(values) {
    return this.registerValidation(new InArray(values));
  }

  distinct() {
    return this.registerValidation(new Distinct());
  }

  timeZone() {
    return this.registerValidation(new TimeZone());
  }

  array() {
    return this.registerValidation(new Array());
  }

  url() {
    return this.registerValidation(new URL());
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

  uuid() {
    return this.registerValidation(new UUID());
  }

  macAddress() {
    return this.registerValidation(new MACAddress());
  }

  ip() {
    return this.registerValidation(new IP());
  }

  ipv4() {
    return this.registerValidation(new IPv4());
  }

  ipv6() {
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
