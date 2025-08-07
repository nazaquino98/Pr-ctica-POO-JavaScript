// 1. Función constructora: CuentaBancaria

function CuentaBancaria(titular, saldoInicial){
  this.titular = titular;
  this.saldoInicial = saldoInicial;
}

const cuentaBancariaPrototype = {
  depositar: function(monto) {
    this.saldoInicial += monto;
    console.log(`Se depositaron $${monto}. Nuevo saldo: $${this.saldoInicial}`);
  },

  extraer: function(monto){
    if (monto <= this.saldoInicial){
      this.saldoInicial -= monto;
      console.log(`Se extrajeron $${monto}. Nuevo saldo: $${this.saldoInicial}`);
    } else {
      console.log('Fondos insuficientes.');
    }
  },

  consultarSaldo: function(){
    console.log(`Saldo actual: $${this.saldoInicial}`);
  }
};

Object.assign(CuentaBancaria.prototype, cuentaBancariaPrototype)

const miCuenta = new CuentaBancaria("Nazarena Aquino", 5000)
miCuenta.consultarSaldo();
miCuenta.depositar(3000);
miCuenta.extraer(2000);

// 2. Clase: CuentaBancaria con get y set











// const myObject = {
//   city: "Madrid",
//   greet() {
//     console.log(`Greetings from ${this.city}`);
//   },
// };

// myObject.greet(); // Greetings from Madrid
