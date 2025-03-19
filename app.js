const API_URL = "http://localhost:3000";

document.getElementById('formJugador').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const equipo = document.getElementById('equipo').value;
    const posicion= document.getElementById('posicion').value;
    const data = { nombre, equipo, posicion};


fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => {
    if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status} - ${response.statusText}`);
    }
    return response.text(); // Convertir la respuesta a texto
})
.then(result => {
    alert(result); // Mostrar el resultado en un alert
})
.catch(error => {
    console.error('Error al enviar la petición:', error);
    alert("Hubo un problema al registrar el empleado.");
});






});
