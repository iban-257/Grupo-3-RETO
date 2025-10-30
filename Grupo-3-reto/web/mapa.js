document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("mostrarMapa");
    const mapaDiv = document.getElementById("map");

    boton.addEventListener("click", () => {
        // Si el mapa está oculto, mostrarlo
        if (mapaDiv.style.display === "none") {
            mapaDiv.style.display = "block";
            boton.textContent = "Ocultar mapa"; // cambiar texto del botón

            // Crear el mapa solo una vez
            if (!mapaDiv.dataset.loaded) {
                // Crear el mapa
                const map = L.map('map').setView([43.3199738, -1.9723845], 15);

                // Añadir capa base
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(map);

                // Añadir marcador
                L.marker([43.3199738, -1.9723845]).addTo(map)
                    .bindPopup(`
                        <b>DONOSWAVE</b><br>
                        Nazaret Zentroa<br>
                        Donostia-San Sebastián<br>
                        <a href="https://maps.app.goo.gl/iR4Lowr8q8D9dkv7A" target="_blank">Ver en Google Maps</a>
                    `)
                    .openPopup();

                mapaDiv.dataset.loaded = "true"; // marcar como cargado
            }
        } 
        // Si el mapa está visible, ocultarlo
        else {
            mapaDiv.style.display = "none";
            boton.textContent = "Ver mapa"; // restaurar texto
        }
    });
});