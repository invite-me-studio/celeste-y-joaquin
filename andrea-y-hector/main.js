 // Cuando el DOM esté listo, cargamos la animación de pantalla de carga
 document.addEventListener("DOMContentLoaded", function() {
    // Animación de CARGA (preloader)
    var loadingAnim = lottie.loadAnimation({
      container: document.getElementById('loading-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'json/Nueva_pantalla_carga.json'  // Ajusta la ruta si es necesario
    });

    // Simulación de carga (por ejemplo 3 segundos). 
    // Puedes adaptarlo a eventos de tu preferencia o a la finalización de la animación.
    setTimeout(function() {
      // Ocultar pantalla de carga
      document.getElementById('loading-screen').style.display = 'none';
      // Mostrar contenido principal
      document.getElementById('main-content').style.display = 'block';
      
      // Después de mostrar el contenido principal, cargamos las secciones Lottie
      cargarSecciones();
    }, 3000); 
  });

  // Función para cargar cada sección Lottie
  function cargarSecciones() {
    // PT1
    lottie.loadAnimation({
      container: document.getElementById('animationPT1'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'json/PT1.json'
    });

    // PT2
    lottie.loadAnimation({
      container: document.getElementById('animationPT2'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'json/PT2.json'
    });

    // PT3
    lottie.loadAnimation({
      container: document.getElementById('animationPT3'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'json/PT3.json'
    });

    // PT4
    lottie.loadAnimation({
      container: document.getElementById('animationPT4'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'json/PT4.json'
    });

    // PT5
    lottie.loadAnimation({
      container: document.getElementById('animationPT5'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'json/PT5.json'
    });

    // PT6
    lottie.loadAnimation({
      container: document.getElementById('animationPT6'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'json/PT6.json'
    });

    // PT7
    lottie.loadAnimation({
      container: document.getElementById('animationPT7'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'json/PT7.json'
    });

    // PT8
    lottie.loadAnimation({
      container: document.getElementById('animationPT8'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'json/PT8.json'
    });
  }

//   funcion timer
function updateCountdown() {
    const countdownDate = new Date("July 12, 2025 12:00:00").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours ;
    document.getElementById("minutes").innerHTML = minutes ;
    document.getElementById("seconds").innerHTML = seconds ;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown-container").innerHTML = "Evento iniciado";
    }
  }

  // Actualizar el contador cada segundo
  let x = setInterval(updateCountdown, 1000);