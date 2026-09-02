# Testing con Jest

Proyecto de ejercicios y pruebas unitarias con Jest.

## 🚀 Ejecución de Tests

### 1. Ejecutar todos los tests
```bash
npm test
```

---

### 2. Ejecutar un archivo de test específico

Puedes ejecutar únicamente un archivo de test (por ejemplo, `calculadora.test.js`) usando cualquiera de las siguientes opciones:

#### Usando `npm test` (pasando argumentos a Jest con `--`)
* Por nombre/patrón de archivo:
  ```bash
  npm test -- calculadora
  ```
* Por ruta completa:
  ```bash
  npm test -- tests/calculadora.test.js
  ```

#### Usando `npx jest` directamente
```bash
npx jest tests/calculadora.test.js
```

---

### 3. Comandos y opciones útiles

* **Ejecutar un test específico por su descripción/nombre (`-t`):**
  ```bash
  npm test -- -t "refactorcalcularPromedio"
  ```
  o con npx:
  ```bash
  npx jest -t "refactorcalcularPromedio"
  ```

* **Modo observador / Watch mode (vuelve a correr los tests al guardar cambios):**
  ```bash
  npm test -- tests/calculadora.test.js --watch
  ```
  o para todos los tests:
  ```bash
  npm test -- --watch
  ```
