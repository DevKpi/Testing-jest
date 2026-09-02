const CuentaBancaria = require("../src/models/CuentaBancaria");

describe("Test de la clase cuenta bancaria", () => {

    test("crear cuenta con saldo inicial 0 o negativo lanza un error", () => {
        expect(() => new CuentaBancaria(0)).toThrow("El saldo inicial no puede ser 0");
        expect(() => new CuentaBancaria(-100)).toThrow("El saldo inicial no puede ser 0");
    });

    test("una cuenta bancaria conserva su saldo inicial", () => {
        const cuenta = new CuentaBancaria(1000);
        expect(cuenta.obtenerSaldo()).toBe(1000);
    });

    test("depositar dinero aumenta el saldo de la cuenta", () => {
        const cuenta = new CuentaBancaria(1000);
        cuenta.depositar(500);
        expect(cuenta.obtenerSaldo()).toBe(1500);
    });

    test("depositar un monto negativo lanza un error", () => {
        const cuenta = new CuentaBancaria(1000);
        expect(() => cuenta.depositar(-500)).toThrow("El monto a depositar debe ser mayor que 0");
    });

    test("retirar dinero disminuye el saldo de la cuenta", () => {
        const cuenta = new CuentaBancaria(1000);
        cuenta.retirar(300);
        expect(cuenta.obtenerSaldo()).toBe(700);
    });

});