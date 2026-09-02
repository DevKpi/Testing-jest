const { sumar } = require("../src/calculadora");


test("suma correctamente dos números", () => {
    const resultado = sumar(2, 3);


    expect(resultado).toBe(5);
});
