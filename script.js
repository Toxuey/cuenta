// Función para obtener la hora del servidor desde WorldTimeAPI
async function getServerTime() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/America/Bogota');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return new Date(data.datetime).getTime(); // La API devuelve la hora en formato ISO
    } catch (error) {
        console.error('Error fetching the server time:', error);
        return new Date().getTime(); // Usar la hora actual si hay un error
    }
}

async function startCountdown() {
    const serverTime = await getServerTime();
    const targetDate = new Date("Sep 13, 2024 11:52:00").getTime(); // Modifica la fecha aquí

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Cálculos para días, horas, minutos y segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mostrar los resultados en los elementos correspondientes
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        // Mientras la cuenta regresiva está activa
        if (distance >= 0) {
            // Establecer un GIF como fondo
            document.body.style.backgroundImage = "url('GifHomerFondo.gif')";
            document.body.style.backgroundSize = "cover";  // Asegura que la imagen cubra toda la página
            document.body.style.backgroundAttachment = "fixed"; // Mantiene el fondo fijo

            // Mostrar los GIFs
            document.getElementById("gif1").classList.remove("hidden");
            document.getElementById("gif2").classList.remove("hidden");
            document.getElementById("gif3").classList.remove("hidden");
            document.getElementById("gif1").classList.remove("hidden");
            document.getElementById("gif2").classList.remove("hidden");
            document.getElementById("gif3").classList.remove("hidden");
        } else {
            clearInterval(countdown);

            // Ocultar la cuenta regresiva
            document.getElementById("countdown").style.display = "none";

            // Restablecer el fondo de la página a su valor por defecto
            document.body.style.backgroundImage = ""; // Restablece el fondo a su valor por defecto
            document.body.style.backgroundSize = "";  // Restablece el tamaño del fondo a su valor por defecto
            document.body.style.backgroundAttachment = ""; // Restablece el ajuste del fondo a su valor por defecto

            // Ocultar los GIFs
            document.getElementById("gif1").classList.add("hidden");
            document.getElementById("gif2").classList.add("hidden");
            document.getElementById("gif3").classList.add("hidden");

            // Mostrar la galería de fotos
            document.body.innerHTML += `
                <div id="gallery-container">
                    <div id="gallery">
                        ${Array.from({ length: 20 }, (_, i) => `
                            <img src="Fotos/Foto${i + 1}.jpg" alt="Foto ${i + 1}">
                        `).join('')}
                    </div>
                </div>
            `;
        }
    }, 1000);
}

startCountdown();
