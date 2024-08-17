const fs = require('fs');

// Función registro una nueva cita
function registrar(nombre, edad, animal, color, enfermedad) {
    // Leer contenido citas.json
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

    // Crea nueva cita
    const nuevaCita = { nombre, edad, animal, color, enfermedad };

    // Agrega nueva cita al arreglo de citas
    citas.push(nuevaCita);

    // Guardar en citas.json
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf-8');

    console.log(`Cita para ${nombre} ha sido registrada.`);
}

// Función leer citas
function leer() {
    // Leer contenido
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

    // Mostrar en consola
    console.log("Citas Registradas:");
    console.log(citas);
}

// Exportar funciones
module.exports = { registrar, leer };
