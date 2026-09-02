class CuentaBancaria {
    #saldo;
    constructor(saldoInicial) {
        if (saldoInicial <= 0) {
            throw new Error("El saldo inicial no puede ser 0");
        }
        this.#saldo = saldoInicial;
    }

    depositar(monto) {
        if (monto <= 0) {
            throw new Error("El monto a depositar debe ser mayor que 0");
        }
        this.#saldo += monto;
    }

    retirar(monto) {
        if (monto <= this.#saldo) {
            this.#saldo -= monto;
        }
    }

    obtenerSaldo() {
        return this.#saldo;
    }
}

module.exports = CuentaBancaria;