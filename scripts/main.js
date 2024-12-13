// Seleccionar todos los elementos de tópicos
const items = document.querySelectorAll(".item");
const galleries = document.querySelectorAll(".products");

// Función para manejar clics
items.forEach(item => {
    item.addEventListener("click", () => {
        const topic = item.getAttribute("data-topic");

        // Ocultar todas las galerías
        galleries.forEach(gallery => {
            gallery.style.display = "none";
        });

        // Mostrar la galería correspondiente
        const selectedGallery = document.querySelector(`.${topic}`);
        if (selectedGallery) {
            selectedGallery.style.display = "flex";

             // Agregar la clase activa al <h2> con un pequeño retraso
             const selectedTitle = selectedGallery.querySelector(".title-section");
             if (selectedTitle) {
                 setTimeout(() => {
                     selectedTitle.classList.add("active");
                 }, 100);
             }
        }
    });
});

// Mostrar la galería de Pasteles al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const defaultGallery = document.querySelector(".pasteles");
    const defaultTitle = defaultGallery.querySelector("h2");

    defaultGallery.style.display = "flex";

    setTimeout(() => {
        defaultTitle.classList.add("active");
    }, 100);
});