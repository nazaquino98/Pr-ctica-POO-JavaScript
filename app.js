// 1. Función constructora: CuentaBancaria

function CuentaBancaria(titular, saldoInicial) {
  this.titular = titular;
  this.saldoInicial = saldoInicial;
}

const cuentaBancariaPrototype = {
  depositar: function (monto) {
    this.saldoInicial += monto;
    console.log(`Se depositaron $${monto}. Nuevo saldo: $${this.saldoInicial}`);
  },

  extraer: function (monto) {
    if (monto <= this.saldoInicial) {
      this.saldoInicial -= monto;
      console.log(`Se extrajeron $${monto}. Nuevo saldo: $${this.saldoInicial}`);
    } else {
      console.log('Fondos insuficientes.');
    }
  },

  consultarSaldo: function () {
    console.log(`Saldo actual: $${this.saldoInicial}`);
  }
};

Object.assign(CuentaBancaria.prototype, cuentaBancariaPrototype)

const miCuenta = new CuentaBancaria("Nazarena Aquino", 5000)
miCuenta.consultarSaldo();
miCuenta.depositar(3000);
miCuenta.extraer(2000);

//2. Clase: CuentaBancaria con get y set

class CuentaBancaria2 {
  #saldo; 

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  
  get saldo() {
    return this.#saldo;
  }

  
  set saldo(nuevoSaldo) {
    if (nuevoSaldo >= 0) {
      this.#saldo = nuevoSaldo;
    } else {
      console.log("El saldo no puede ser negativo.");
    }
  }

  depositar(monto) {
    this.saldo = this.saldo + monto; 
    console.log(`Se depositaron $${monto}.`);
  }

  extraer(monto) {
    if (monto <= this.saldo) {
      this.saldo = this.saldo - monto;
      console.log(`Se extrajeron $${monto}.`);
    } else {
      console.log("Fondos insuficientes");
    }
  }

  consultarSaldo() {
    console.log(`Saldo actual: $${this.saldo}`);
  }
}

const miCuenta2 = new CuentaBancaria2("Nazarena Aquino", 10000)

miCuenta2.consultarSaldo();











