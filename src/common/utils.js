module.exports.isValidJSON = json => {
  try {
    JSON.parse(json);
    return true;
  } catch (e) {
    return false;
  }
};

module.exports.camalize = str => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

module.exports.hasDuplicates = arr => {
  return new Set(arr).size !== arr.length;
};

module.exports.isValidTimeZone = tz => {
  if (!Intl || !Intl.DateTimeFormat().resolvedOptions().timeZone) {
    throw "Time zones are not available in this environment";
  }

  try {
    Intl.DateTimeFormat(undefined, { timeZone: tz });
    return true;
  } catch (ex) {
    return false;
  }
};

module.exports.joinWithSeparator = (arr, separator = "and") => {
  return arr.slice(0, -1).join(", ") + ` ${separator} ` + arr.slice(-1);
};

module.exports.isEmail = str => {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return pattern.test(str);
};

module.exports.isArray = obj => {
  return Object.prototype.toString.call(obj) === "[object Array]";
};

module.exports.isCEP = cep => {
  cep = cep.replace(/[^\d]+/g, "");

  if (cep == "") return false;

  if (cep.length != 8) return false;

  // Elimina CNPJs invalidos conhecidos
  if (
    cep == "00000000" ||
    cep == "11111111" ||
    cep == "22222222" ||
    cep == "33333333" ||
    cep == "44444444" ||
    cep == "55555555" ||
    cep == "66666666" ||
    cep == "77777777" ||
    cep == "88888888" ||
    cep == "99999999"
  )
    return false;

  return true;
};

module.exports.isRG = numero => {
  numero = numero.replace(/[^\d]+/g, "");

  if (numero == "") return false;

  if (numero.length != 9) return false;

  // Elimina CNPJs invalidos conhecidos
  if (
    numero == "000000000" ||
    numero == "111111111" ||
    numero == "222222222" ||
    numero == "333333333" ||
    numero == "444444444" ||
    numero == "555555555" ||
    numero == "666666666" ||
    numero == "777777777" ||
    numero == "888888888" ||
    numero == "999999999"
  )
    return false;

  var numero = numero.split("");
  tamanho = numero.length;
  vetor = new Array(tamanho);

  if (tamanho >= 1) {
    vetor[0] = parseInt(numero[0]) * 2;
  }
  if (tamanho >= 2) {
    vetor[1] = parseInt(numero[1]) * 3;
  }
  if (tamanho >= 3) {
    vetor[2] = parseInt(numero[2]) * 4;
  }
  if (tamanho >= 4) {
    vetor[3] = parseInt(numero[3]) * 5;
  }
  if (tamanho >= 5) {
    vetor[4] = parseInt(numero[4]) * 6;
  }
  if (tamanho >= 6) {
    vetor[5] = parseInt(numero[5]) * 7;
  }
  if (tamanho >= 7) {
    vetor[6] = parseInt(numero[6]) * 8;
  }
  if (tamanho >= 8) {
    vetor[7] = parseInt(numero[7]) * 9;
  }
  if (tamanho >= 9) {
    vetor[8] = parseInt(numero[8]) * 100;
  }

  total = 0;

  if (tamanho >= 1) {
    total += vetor[0];
  }
  if (tamanho >= 2) {
    total += vetor[1];
  }
  if (tamanho >= 3) {
    total += vetor[2];
  }
  if (tamanho >= 4) {
    total += vetor[3];
  }
  if (tamanho >= 5) {
    total += vetor[4];
  }
  if (tamanho >= 6) {
    total += vetor[5];
  }
  if (tamanho >= 7) {
    total += vetor[6];
  }
  if (tamanho >= 8) {
    total += vetor[7];
  }
  if (tamanho >= 9) {
    total += vetor[8];
  }

  resto = total % 11;

  return resto == 0;
};

module.exports.isCNPJ = cnpj => {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj == "") return false;

  if (cnpj.length != 14) return false;

  // Elimina CNPJs invalidos conhecidos
  if (
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"
  )
    return false;

  // Valida DVs
  tamanho = cnpj.length - 2;
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
};

module.exports.isCPF = strCpf => {
  strCpf = strCpf.replace(/[^\d]+/g, "");

  if (strCpf == "") return false;

  if (strCpf.length != 11) return false;

  // Elimina CPFs invalidos conhecidos
  if (
    strCpf == "00000000000" ||
    strCpf == "11111111111" ||
    strCpf == "22222222222" ||
    strCpf == "33333333333" ||
    strCpf == "44444444444" ||
    strCpf == "55555555555" ||
    strCpf == "66666666666" ||
    strCpf == "77777777777" ||
    strCpf == "88888888888" ||
    strCpf == "99999999999"
  )
    return false;

  var soma;
  var resto;
  soma = 0;

  for (i = 1; i <= 9; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
  }

  resto = soma % 11;

  if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }

  if (resto != parseInt(strCpf.substring(9, 10))) {
    return false;
  }

  soma = 0;

  for (i = 1; i <= 10; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
  }
  resto = soma % 11;

  if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }

  if (resto != parseInt(strCpf.substring(10, 11))) {
    return false;
  }

  return true;
};
