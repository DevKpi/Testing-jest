const { sumar } = require("../src/calculadora");
const { restar } = require("../src/calculadora");
const { multiplicar } = require("../src/calculadora");
const { dividir } = require("../src/calculadora");
const { calcularPromedio } = require("../src/calculadora");
const { refactorcalcularPromedio } = require("../src/calculadora");

test("suma correctamente dos números", () => {
    const resultado = sumar(2, 3);


    expect(resultado).toBe(5);
});

test("2 + 3 devuelve 5", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("0 + 5 devuelve 5", () => {
  expect(sumar(0, 5)).toBe(5);
});

test("-2 + 2 devuelve 0", () => {
  expect(sumar(-2, 2)).toBe(0);
});

// Muchos test para una misma función, agrupadas usando describe

describe("Función sumar", () => {


    test("suma números positivos", () => {
        expect(sumar(2, 3)).toBe(5);
    });


    test("suma con cero", () => {
        expect(sumar(5, 0)).toBe(5);
    });


    test("suma números negativos", () => {
        expect(sumar(-2, -3)).toBe(-5);
    });


});

describe ("Función dividir", () => {
    test("divide correctamente dos números", () => {
        expect(dividir(10, 2)).toBe(5);
    });

    test("divide por cero lanza error", () => {
        expect(() => dividir(10, 0)).toThrow("No se puede dividir por cero");
    });
});

describe ("Función multiplicar", () => {
    test("multiplica correctamente dos números", () => {
        expect(multiplicar(3, 4)).toBe(12);
    });

    test("multiplica por cero devuelve cero", () => {
        expect(multiplicar(5, 0)).toBe(0);
    });
});

describe ("Función restar", () => {
    test("resta correctamente dos números", () => {
        expect(restar(10, 4)).toBe(6);
    });

    test("resta con cero devuelve el mismo número", () => {
        expect(restar(5, 0)).toBe(5);
    });

    test("resta números negativos", () => {
        expect(restar(-5, -3)).toBe(-2);
    });
});

// describe ("Función calcularPromedio", () => {
//     test("calcula el promedio de un array de números", () => {
//         expect(calcularPromedio([8, 9, 10])).toBe(9);
//     });
// });

describe ("Función refactorcalcularPromedio", () => {
    test("calcula el promedio de un array de números", () => {
        expect(refactorcalcularPromedio([8, 9, 10])).toBe(9);
    });
});