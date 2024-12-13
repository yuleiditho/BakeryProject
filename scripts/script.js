(function () {
    const COUNT = 150; // Número de copos de nieve
    const body = document.body;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    const snowflakes = [];

    // Ajustar el tamaño del lienzo
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    // Clase para los copos de nieve
    class Snowflake {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * -height; // Inicia fuera de la pantalla
            this.vx = (Math.random() - 0.5) * 2; // Velocidad horizontal
            this.vy = 1 + Math.random() * 2; // Velocidad vertical
            this.r = 1 + Math.random() * 2; // Radio del copo
            this.opacity = 0.5 + Math.random() * 0.5; // Transparencia
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Si el copo de nieve sale de la pantalla
            if (this.y > height || this.x < 0 || this.x > width) {
                this.reset();
            }
        }

        draw() {
            ctx.fillStyle = '#FFF'; // Establecer color blanco
            ctx.globalAlpha = this.opacity; // Aplicar opacidad
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    // Crear los copos de nieve
    function createSnowflakes() {
        for (let i = 0; i < COUNT; i++) {
            snowflakes.push(new Snowflake());
        }
    }

    // Actualizar y dibujar los copos de nieve
    function updateAndRender() {
        ctx.clearRect(0, 0, width, height);

        for (const snowflake of snowflakes) {
            snowflake.update();
            snowflake.draw();
        }

        requestAnimationFrame(updateAndRender);
    }

    // Configuración inicial
    function init() {
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '1000';
        canvas.style.pointerEvents = 'none';

        resizeCanvas();
        createSnowflakes();
        updateAndRender();

        // Ajustar el tamaño del lienzo al redimensionar la ventana
        window.addEventListener('resize', resizeCanvas);
    }

    // Iniciar el efecto de nieve
    init();
    body.appendChild(canvas);
})();


//questions
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Alternar la clase 'open' para abrir/cerrar
            item.classList.toggle('open');

            // Cerrar los otros ítems si están abiertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
        });
    });
});

