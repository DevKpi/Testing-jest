/*function multiplicar(a, b) {
    return a * b;
}

function probarMultiplicacion() {
    const resultado = multiplicar(5, 2);
    const esperado = 10;


    if (resultado === esperado) {
        console.log("✅ Test correcto");
    } else {
        console.log("❌ Test incorrecto");
    }
}

probarMultiplicacion(); */

// function multiplicar(a, b) {
//     return a * b;
// }

function assertEquals(resultado, esperado) {
    if (resultado === esperado) {
        console.log("✅ Test correcto");
    } else {
        console.log(`❌ Esperado: ${esperado} - Obtenido: ${resultado}`);
    }
}

// assertEquals(multiplicar(5, 2), 10);
// assertEquals(multiplicar(0, 5), 0);
// assertEquals(multiplicar(-2, 3), -6);

// class Cuenta {
//     #saldo;


//     constructor(saldoInicial = 0) {
//         this.#saldo = saldoInicial;
//     }


//     depositar(monto) {
//         if (monto > 0) {
//             this.#saldo += monto;
//         }
//     }


//     obtenerSaldo() {
//         return this.#saldo;
//     }
// }

// const cuenta = new Cuenta(1000);


// cuenta.depositar(500);


// assertEquals(cuenta.obtenerSaldo(), 1500);;

// const cuenta1 = new Cuenta(1000);
// cuenta1.depositar(500);


// assertEquals(cuenta1.obtenerSaldo(), 1500);


// const cuenta2 = new Cuenta(1000);
// cuenta2.depositar(200);


// assertEquals(cuenta2.obtenerSaldo(), 1200);

// Act 1

function puedeComprar(edad, dinero) {
    return edad >= 18 && dinero >= 5000;
}


// assertEquals(puedeComprar(20, 6000), true);
// assertEquals(puedeComprar(17, 6000), false);
// assertEquals(puedeComprar(20, 4000), false);
// assertEquals(puedeComprar(17, 4000), false);
// assertEquals(puedeComprar(18, -5000), false);
// assertEquals(puedeComprar(-18, 6000), false);
// assertEquals(puedeComprar(18, 4999.99), false);
// assertEquals(puedeComprar(19, 5000), true);

function calcularPromedio(nota1, nota2) {
    return nota1 + nota2 / 2;
}

assertEquals(calcularPromedio(2, 2), 2);

// Corrección de la function
function calcularPromedio2(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

assertEquals(calcularPromedio2(2, 2), 2);