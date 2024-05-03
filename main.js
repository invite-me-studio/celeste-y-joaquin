document.addEventListener('DOMContentLoaded', function() {
    // Pre-carga de todas las animaciones Lottie
    loadLottieAnimation('full-width-lottie-intro', './json/Intro.json');
    loadLottieAnimation('full-width-lottie', './json/pt1.json');
    loadLottieAnimation('lottie1', './json/pt2.json');
    loadLottieAnimation('lottie2', './json/pt3.json');
    loadLottieAnimation('lottie3', './json/pt4.json');
    loadLottieAnimation('lottie4', './json/pt5.json');
    loadLottieAnimation('lottie5', './json/pt6.json');
    loadLottieAnimation('lottie6', './json/pt7.json');
    loadLottieAnimation('lottie7', './json/pt8.json');
    loadLottieAnimation('lottie8', './json/pt9.json');
    loadLottieAnimation('lottie9', './json/pt10.json');

    var loader = document.getElementById('full-width-lottie-loader');
    var intro = document.getElementById('full-width-lottie-intro');
    var mainContent = document.getElementById('main-content');

    if (!loader || !intro || !mainContent) {
        console.error('Some DOM elements are missing.');
        return; // No continue si algunos elementos no están presentes
    }

    // Ocultar loader y mostrar intro cuando todo esté cargado
    window.onload = function() {
        hideLoader();
    };

    // Evento de clic para cambiar de intro a contenido principal
    intro.addEventListener('click', function() {
        hideIntroShowContent();
    });

    function hideLoader() {
        loader.style.opacity = 0;
        setTimeout(function() {
            loader.style.display = 'none';
            intro.style.display = 'block';
            setTimeout(function() {
                intro.style.opacity = 1;
            }, 10);
        }, 500);
    }

    function hideIntroShowContent() {
        intro.style.opacity = 0;
        setTimeout(function() {
            intro.style.display = 'none';
            mainContent.style.display = 'block';
            setTimeout(function() {
                mainContent.style.opacity = 1;
            }, 10);
        }, 500);
    }
});

function loadLottieAnimation(containerId, path) {
    var animationContainer = document.getElementById(containerId);
    if (!animationContainer) {
        console.error('Animation container not found:', containerId);
        return;
    }
    var animData = {
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path
    };
    lottie.loadAnimation(animData);
}


function updateTimer() {
    const now = new Date();
    const targetDate = new Date('2024-07-13T00:00:00');  // 13 de julio de 2024 a medianoche
    const diff = targetDate - now;

    if (diff >= 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById('days').innerText = `${days}`;
        document.getElementById('hours').innerText = `${hours}`;

        document.getElementById('seconds').innerText = `${seconds}`;
    } else {
        // La fecha ya ha pasado
        document.getElementById('timer').innerText = "El evento ha pasado.";
    }
}

// Actualizar el temporizador cada segundo
setInterval(updateTimer, 1000);
