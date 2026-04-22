# 🎥 Guion Video Tutorial: GitHub Actions_1

## 1. Introducción (0:00 – 0:30)

En este video voy a mostrar cómo crear una acción reutilizable en JavaScript usando GitHub Actions.
Estas acciones permiten automatizar tareas dentro de un repositorio, como pruebas o validaciones.
Además, veremos cómo integrar esta acción dentro de un workflow para que se ejecute automáticamente.

---

## 2. ¿Qué son las acciones? (0:30 – 1:00)

GitHub Actions funciona mediante workflows, que son archivos en formato YAML donde definimos procesos automáticos.

Dentro de estos workflows usamos acciones, que son bloques reutilizables que ejecutan tareas específicas.

Ejemplo de uso de una acción:

```
uses: actions/checkout@v4
```

En este caso estamos utilizando una acción oficial para clonar el repositorio.

---

## 3. Acción JavaScript propia (1:00 – 2:00)

Ahora vamos a crear nuestra propia acción usando JavaScript.

Una acción JavaScript se compone de dos archivos principales:

📄 Archivo: action.yml
Define cómo se ejecuta la acción:

```
runs:
  using: "node20"
  main: "index.js"
```

Aquí indicamos que la acción se ejecuta con Node.js y que el archivo principal es index.js.

📄 Archivo: index.js
Contiene la lógica de la acción:

```
const core = require("@actions/core");

const nombre = core.getInput("nombre");
console.log(`Hola ${nombre}`);
```

Este código recibe un valor como entrada y muestra un mensaje en consola.

---

## 4. Uso en workflow (2:00 – 3:00)

Para usar la acción dentro de un workflow utilizamos la palabra clave uses.

Ejemplo:

```
uses: ./.github/actions/js-action
with:
  nombre: "Oscar"
```

Aquí estamos reutilizando nuestra acción personalizada y enviando un parámetro.

---

## 5. Ejecución (3:00 – 3:30)

Cuando hacemos un push al repositorio, el workflow se ejecuta automáticamente.

Podemos ver los resultados en la pestaña Actions dentro de GitHub.

En los logs aparecerá el mensaje generado por nuestra acción.

---

## 6. Conclusión (3:30 – 4:00)

Las acciones reutilizables permiten encapsular lógica y automatizar procesos dentro del desarrollo de software.

Son fundamentales en integración continua, ya que permiten ejecutar tareas de forma automática y consistente.
