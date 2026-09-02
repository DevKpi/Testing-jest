function sumar(a, b) {
    return a + b;
}

function restar (a, b) {
    return a - b;
}

function multiplicar (a, b) {
    return a * b;
}

function dividir (a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

function calcularPromedio(notas) {
    let total = 0;


    for (const nota of notas) {
        total += nota;
    }


    return total / (notas.length - 1);
}

function refactorcalcularPromedio(notas) {
    if (notas.length === 0) {
        throw new Error("No se puede calcular el promedio de un arreglo vacío");
    }

    let total = 0;

    for (const nota of notas) {
        total += nota;
    }

    return total / notas.length;
}


module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    calcularPromedio,
    refactorcalcularPromedio
};
