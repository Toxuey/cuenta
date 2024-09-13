// Función para obtener la hora del servidor desde WorldTimeAPI
async function getServerTime() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/America/Bogota');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return new Date(data.datetime).getTime(); 
    } catch (error) {
        console.error('Error fetching the server time:', error);
        return new Date().getTime();
    }
}

async function startCountdown() {
    const serverTime = await getServerTime();
    const targetDate = new Date("Sep 13, 2024 13:45:00").getTime(); 

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance >= 0) {
            document.body.style.backgroundImage = "url('GifHomerFondo.gif')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
        } else {
            clearInterval(countdown);

            document.getElementById("countdown").style.display = "none";
            document.body.style.backgroundImage = "";
            document.body.style.backgroundSize = "";  
            document.body.style.backgroundAttachment = ""; 

            document.getElementById("gif1").classList.add("hidden");
            document.getElementById("gif2").classList.add("hidden");
            document.getElementById("gif3").classList.add("hidden");
            document.getElementById("gif4").classList.add("hidden");
            document.getElementById("gif5").classList.add("hidden");

            document.getElementById("main-title").classList.add("hidden");
            document.getElementById("end-title").classList.remove("hidden");

            document.body.innerHTML += `
                <div id="gallery-container">
                    <div id="gallery">
                        ${Array.from({ length: 26 }, (_, i) => `
                            <img src="Fotos/Foto${i + 1}.jpeg" alt="Foto ${i + 1}">
                        `).join('')}
                    </div>
                </div>
            `;
        }
    }, 1000);
}

startCountdown();
