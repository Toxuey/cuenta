// Fecha objetivo (puedes cambiar esta fecha por la que desees)
const targetDate = new Date("Sep 13, 2024 09:35:00").getTime();

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

    // Cuando el contador llega a cero
    if (distance < 0) {
        clearInterval(countdown);

        // Ocultar la cuenta regresiva
        document.getElementById("countdown").style.display = "none";

        // Mostrar GIF y texto animado
        document.body.innerHTML += `
            <div style="text-align: center;">
                <h1 id="animatedText">¡A beber mamahuevoooooos!</h1>
                <div class="gif-container">
                    <img src="https://j.gifs.com/vZ47rV.gif" alt="Celebración GIF 1">
                    <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXMxZGhtZGpudjc2MjNwZDZ3Zm13MnppYjM3amV6cXo4cmo1MGNyMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/blSTtZehjAZ8I/giphy.gif" alt="Celebración GIF 2">
                    <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG5mMmJhM2s3bHpsMGN0b3JkaDNudGJ1Mjd3Zzc0eWczemo0YXl5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wAxlCmeX1ri1y/giphy.gif">
                    <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2s2NGJ1ZTdjNnMzdGRxM2Jic2hoMXBvY3Bhdm4yb3NmMGE3bXlhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hPGloL5hneaSA/giphy.gif">
                    <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXAyeWw5ZG5oNmN4bGZzdjQ2c2V4NDA2ZmJ0eGhqc3lqNDFmaTNlNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hTh9bSbUPWMWk/giphy.gif">
                </div>
            </div>
        `;

        // Animar el texto
        const animatedText = document.getElementById("animatedText");
        animatedText.style.animation = "pulse 1s infinite";

        // Definir la animación en CSS usando JavaScript
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}, 1000);
