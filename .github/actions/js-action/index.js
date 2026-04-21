const core = require("@actions/core");

try {
  const nombre = core.getInput("nombre");
  console.log(`Hola ${nombre}, acción ejecutada correctamente 🚀`);
} catch (error) {
  core.setFailed(error.message);
}