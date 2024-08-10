// Función para actualizar la imagen al pasar el ratón por encima
function updateImage(previewPic) {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
}

// Función para restablecer la imagen al quitar el ratón
function resetImage() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('images/fondo.jpg')";
    imageDiv.textContent = "Pase el cursor por encima de una imagen para mostrarla aquí";
}

// Función para manejar el evento focus
function showFocus(image) {
    console.log("Foco en: " + image.alt);
}

// Función para manejar el evento blur
function showBlur(image) {
    console.log("Desenfoque de: " + image.alt);
}

// Función para añadir el atributo tabindex y configurar eventos al cargar la página
window.onload = function() {
    console.log("La página se ha cargado correctamente.");
    addTabindex();
};

// Función para añadir el atributo tabindex a las imágenes
function addTabindex() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(image => {
        image.setAttribute('tabindex', '0');
    });
    console.log("Atributo tabindex añadido a las imágenes.");
}
