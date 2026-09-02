function assertEquals(resultado, esperado) {
    if (resultado === esperado) {
        console.log("✅ Test correcto");
    } else {
        console.log(`❌ Esperado: ${esperado} - Obtenido: ${resultado}`);
    }
}

class Producto {
  #precio;

  constructor(nombre, precio) {
    this.nombre = nombre;
    this.#precio = precio;
  }

  aplicarDescuento(porcentaje) {
    if (porcentaje >= 0 && porcentaje <= 100) {
      this.#precio -= (this.#precio * porcentaje) / 100;
    }
    else if (porcentaje > 100) {
      console.log("El porcentaje de descuento no puede ser mayor al 100%");
    }
    else if (porcentaje < 0) {
      console.log("El porcentaje de descuento no puede ser negativo");
    }
  }

  obtenerPrecio() {
    return this.#precio;
  }
}

const prod1 = new Producto("Remera", 1000);
prod1.aplicarDescuento(20);
assertEquals(prod1.obtenerPrecio(), 800);

const prod2 = new Producto("Pantalón", 1000);
prod2.aplicarDescuento(0);
assertEquals(prod2.obtenerPrecio(), 1000);

const prod3 = new Producto("Zapatillas", 1000);
prod3.aplicarDescuento(100);
assertEquals(prod3.obtenerPrecio(), 0);


const prod4 = new Producto("Campera", 1000);
prod4.aplicarDescuento(-10);
assertEquals(prod4.obtenerPrecio(), 1000);


const prod5 = new Producto("Gorra", 1000);
prod5.aplicarDescuento(150);
assertEquals(prod5.obtenerPrecio(), 1000);
