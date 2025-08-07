// 3. Agregar método a String.prototype

String.prototype.concatenarPalabra = function(palabra){
  return `${this} ${palabra}`;
}

const titular = 'Nazarena Aquino';
const frase = titular.concatenarPalabra(' es titular de ambas cuentas');

console.log(titular);
console.log(frase);