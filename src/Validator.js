const messages = require("./common/messages");

class Validator {
  static get messages() {
    return messages;
  }

  constructor(lang = "en") {
    this.lang = lang;
  }

  static setCustomMessages(customMessages) {
    for (let lang in customMessages) {
      if (!messages.hasOwnProperty(lang)) messages[lang] = {};

      for (let validationName in customMessages[lang]) {
        messages[lang][validationName] = customMessages[lang][validationName];
      }
    }
  }

  async validate(data, rules) {
    const errors = [];

    for (let rule of rules) {
      const { attribute, validations } = rule;

      for (let validation of validations) {
        const value = data[attribute];
        const validated = await validation.handle(attribute, value, data);

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

  if (hasLang(lang, validationName)) {
    message = getCustomMessage(attribute, lang, validationName);
  } else if (hasLang(fallbackLang, validationName)) {
    message = getCustomMessage(attribute, fallbackLang, validationName);
  } else if (isDefined(validation.messages)) {
    message = getValidationMessage(attribute, validation, lang);
  } else {
    throw new Error(getLangMissingError(lang, validationName));
  }

  for (let param in validation) {
    const value = validation[param];
    message = replaceMessage(message, param, value);
  }

  return message;
}

function getLang(lang) {
  return messages[lang];
}

function getCustomMessage(attribute, lang, validationName) {
  const message = messages[lang][validationName];

  return replaceAttribute(message, attribute);
}

function getValidationMessage(attribute, validation, lang) {
  const message = validation.messages[lang];

  return replaceAttribute(message, attribute);
}

function getValidationName(validation) {
  return validation.name || validation.constructor.name.toLowerCase();
}

function replaceAttribute(message, attribute) {
  return replaceMessage(message, "attribute", attribute);
}

function replaceMessage(message, param, value) {
  return message.replace(`:${param}`, value);
}

function hasLang(lang, validationName) {
  return messages[lang] && messages[lang][validationName];
}

function isDefined(variable) {
  return typeof variable !== "undefined";
}

function getLangMissingError(lang, validationName) {
  return `Lang "${lang}" for validating "${validationName}" is missing.`;
}

module.exports = Validator;
