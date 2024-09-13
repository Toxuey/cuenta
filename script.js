// Función para obtener la hora del servidor desde WorldTimeAPI
async function getServerTime() {
    const response = await fetch('http://worldtimeapi.org/api/timezone/America/Bogota');
    const data = await response.json();
    return new Date(data.datetime).getTime(); // La API devuelve la hora en formato ISO
}

async function startCountdown() {
    const serverTime = await getServerTime();
    const targetDate = new Date("Sep 13, 2024 10:50:00").getTime();

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
            document.body.style.backgroundImage = "url('gifs/countdown-background.gif')";
            document.body.style.backgroundSize = "cover";  // Asegura que la imagen cubra toda la página
            document.body.style.backgroundAttachment = "fixed"; // Mantiene el fondo fijo
        } else {
            clearInterval(countdown);

            // Ocultar la cuenta regresiva
            document.getElementById("countdown").style.display = "none";

            // Restablecer el fondo de la página a su valor por defecto
            document.body.style.backgroundImage = ""; // Restablece el fondo a su valor por defecto
            document.body.style.backgroundSize = "";  // Restablece el tamaño del fondo a su valor por defecto
            document.body.style.backgroundAttachment = ""; // Restablece el ajuste del fondo a su valor por defecto

            // Mostrar la galería de fotos
            document.body.innerHTML += `
                <div id="gallery-container">
                    <div id="gallery">
                        ${Array.from({ length: 20 }, (_, i) => `
                            <img src="Fotos/Foto${i + 1}.jpeg" alt="Foto ${i + 1}">
                        `).join('')}
                    </div>
                </div>
            `;
        }
    }, 1000);
}

startCountdown();
