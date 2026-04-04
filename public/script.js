//Función para pedir datos al servidor
async function conectarConBackend() {
    try {
        const respuesta = await fetch('/api/saludo'); // Peticion HTTP GET
        const datos = await respuesta.json(); //Converetimos la respuesta a JSON

        console.log("Respuesta recibida:", datos);
        alert(datos.mensaje); //Debería salir un mensaje de respuesta en pantalla
    } catch (error) {
        console.error("Error al conectar con el servidor:", error);
    }
}

conectarConBackend();    // LLamamos a la funcion para conectar con el backend al cargar la página