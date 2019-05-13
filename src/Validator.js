const messages = require("./common/messages");
const attributes = require("./common/attributes");
const { joinWithSeparator, isArray } = require("./common/utils");

class Validator {
  constructor(lang = "en") {
    this.lang = lang;
  }

  static get messages() {
    return messages;
  }

  static setCustomMessages(customMessages) {
    updateObj(customMessages, attributes);
  }

  static setCustomAttributes(customAttributes) {
    updateObj(customAttributes, attributes);
  }

  async validate(data, rules) {
    const errors = [];

    for (let rule of rules) {
      const { attribute, validations } = rule;

      for (let validation of validations) {
        const value = data[attribute];
        const validated = await validation.handle(
          attribute,
          value,
          data,
          this.lang
        );

        if (!validated) {
          const message = getMessage(attribute, validation, this.lang);

          errors.push({ attribute, message });
          break;
        }
      }
    }

    if (errors.length > 0) throw errors;
  }
}

function getMessage(attribute, validation, lang) {
  const fallbackLang = "en";
  const validationName = getValidationName(validation);
  let message = "";

  if (hasMessageLang(lang, validationName)) {
    message = getCustomMessage(attribute, lang, validationName);
  } else if (hasMessageLang(fallbackLang, validationName)) {
    message = getCustomMessage(attribute, fallbackLang, validationName);
  } else if (isDefined(validation.messages)) {
    message = getValidationMessage(attribute, validation, lang);
  } else {
    throw new Error(getLangMissingError(lang, validationName));
  }

  for (let param in validation) {
    let value = validation[param];

    value = isArray(value)
      ? joinWithSeparator(value, validation.separator)
      : value;

    message = replaceMessage(message, param, value);
  }

  return message;
}

function getCustomMessage(attribute, lang, validationName) {
  const message = messages[lang][validationName];

  return replaceAttribute(lang, message, attribute);
}

function getValidationMessage(attribute, validation, lang) {
  const message = validation.messages[lang];

  return replaceAttribute(lang, message, attribute);
}

function getValidationName(validation) {
  return validation.name || validation.constructor.name.toLowerCase();
}

function replaceAttribute(lang, message, attribute) {
  return replaceMessage(
    message,
    "attribute",
    translateAttribute(lang, attribute)
  );
}

function replaceMessage(message, param, value) {
  return message.replace(`:${param}`, value);
}

function translateAttribute(lang, attribute) {
  if (hasAttributeLang(lang, attribute)) {
    attribute = attributes[lang][attribute];
  }

  return attribute.replace("_", " ");
}

function hasMessageLang(lang, validationName) {
  return messages[lang] && messages[lang][validationName];
}

function hasAttributeLang(lang, attribute) {
  return attributes[lang] && attributes[lang][attribute];
}

function isDefined(variable) {
  return typeof variable !== "undefined";
}

function getLangMissingError(lang, validationName) {
  return `Lang "${lang}" for validating "${validationName}" is missing.`;
}

function updateObj(obj, replacer) {
  for (let x in obj) {
    if (!replacer.hasOwnProperty(x)) replacer[x] = {};

    for (let y in obj[x]) {
      replacer[x][y] = obj[x][y];
    }
  }
}

module.exports = Validator;
