// Fecha objetivo (año nuevo)
const targetDate = new Date("Sep 13, 2024 08:30:00").getTime();

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

    // Si el contador llega a cero
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "¡Feliz Año Nuevo!";
    }
}, 1000);
