// Fecha objetivo (puedes cambiar esta fecha por la que desees)
const targetDate = new Date("Sep 13, 2024 10:24:00").getTime();

// Referencia al temporizador
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
        document.body.style.backgroundImage = "url('countdown-background.gif')";
        document.body.style.backgroundSize = "cover";  // Asegura que la imagen cubra toda la página
        document.body.style.backgroundAttachment = "fixed"; // Mantiene el fondo fijo
    } else {
        clearInterval(countdown);

        // Ocultar la cuenta regresiva
        document.getElementById("countdown").style.display = "none";

        // Cambiar el fondo de la página a una imagen estática
        document.body.style.backgroundImage = "url('background-image.jpg')";
        document.body.style.backgroundSize = "cover";  // Asegura que la imagen cubra toda la página

        // Mostrar la galería de fotos
        document.body.innerHTML += `
            <div id="gallery-container">
                <div id="gallery">
                    ${Array.from({ length: 20 }, (_, i) => `
                        <img src="/Fotos/Foto${i + 1}.jpg" alt="Foto ${i + 1}">
                    `).join('')}
                </div>
            </div>
        `;
    }
}, 1000);
