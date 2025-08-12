//2. Clase: CuentaBancaria con get y set

class CuentaBancaria {
  titular;
  #saldoInicial;
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldoInicial = saldoInicial;
  }

  get saldo() {
    return this.#saldoInicial;
  }

  set saldo(nuevoSaldo) {
    if (nuevoSaldo >= 0) {
      this.#saldoInicial = nuevoSaldo;
      console.log(`Saldo modificado: ${nuevoSaldo}`);
    } else {
      console.log("El saldo no puede ser negativo");
    }
  }
}

const miCuenta = new CuentaBancaria("Nazarena Aquino", 3000);

console.log(miCuenta.saldo);
miCuenta.saldo = 50;