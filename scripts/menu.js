const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('show');
    if (navbar.classList.contains('show')) {
        menuToggle.classList.remove('fa-bars');
        menuToggle.classList.add('fa-times');
    } else {
        menuToggle.classList.remove('fa-times');
        menuToggle.classList.add('fa-bars');
    }
});


function checkWindowSize() {
    const elemento = document.querySelector('.newsletter-container');
    if (window.innerWidth < 1490) {
      elemento.style.display = 'none';
    } else {
      elemento.style.display = 'flex';
    }
  }
  
  // Verificar el tamaño de la ventana al cargar la página
  window.addEventListener('load', checkWindowSize);
  
  // Verificar el tamaño de la ventana al redimensionar
  window.addEventListener('resize', checkWindowSize);
  