// 1. Cargamos las librerias necesarias
const express = require('express'); // El motor del servidor
const path = require('path');       // Ayuda a manejar rutas de carpetas

const app = express();   // Creamos la instancia de la aplicación
const PORT = 3000;      // Definimos el puerto de escucha

// 2. MiddLeware: El puente entre el cliente y el servidor
// Aqui le decimos a Express: "Todo lo que esté en 'public' entregalo al navegador"
app.use(express.static(path.join(__dirname, 'public')));

// 3. NUESTRO PRIMER ENDPOINT (Punto de conexión)
// Cuando el usuario visite 'localhost:3000/api/saludo', el servidor res`ponderá esto:
app.get('/api/saludo', (req, res) => {
    res.json({
        mensaje: "¡Hola desde el backend de la Casimiro Sotelo!",
        estudiante: "Yorlyng",
        colaborador: "Ivana Valenzuela",
        universidad: "UNCSM",
        unidad: "Unidad II: Herramientas para el desarrollo web"
    });
});

// Encender el SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});