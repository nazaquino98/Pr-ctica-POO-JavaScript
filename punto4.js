// 4. Sobreescribir toUpperCase

String.prototype.toUpperCase = function () {
  return "ESTO ESTA PROHIBIDO";
};

const prueba = "esto es la prueba";
const resultado = prueba.toUpperCase();
console.log(resultado);