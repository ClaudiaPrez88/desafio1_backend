const { registrar, leer } = require('./operaciones');

// Obtener argumentos por línea de comando
const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

if (operacion === 'registrar') {
    // Llamar función registrarCita con los argumentos proporcionados
    registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
    // Llamar función leerCitas
    leer();
} else {
    console.log('Operación no reconocida. Usa "registrar" o "leer".');
}

