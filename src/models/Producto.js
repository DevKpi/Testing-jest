class Producto {
    #precio;


    constructor(nombre, precio) {
        this.nombre = nombre;
        this.#precio = precio;
    }


    obtenerPrecio() {
        return this.#precio;
    }


    aplicarDescuento(porcentaje) {
        this.#precio -= this.#precio * porcentaje / 100;
    }
}


module.exports = Producto;
