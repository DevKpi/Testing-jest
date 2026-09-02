const { sumar } = require("../src/calculadora");


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
