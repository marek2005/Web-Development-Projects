// Busca un elemento HTML con la clase '.arrastrable' y lo almacena en una variable.
const divArrastrable = document.querySelector('.arrastrable');

// Define las variables posX, posY y arrastrando, inicializando arrastrando en false.
let posX, posY, arrastrando = false;

// Agrega un event listener al elemento 'divArrastrable' para detectar el evento 'mousedown'.
divArrastrable.addEventListener('mousedown', (e) => {
    // Establece la variable 'arrastrando' en true.
    arrastrando = true;
    // Calcula la posición relativa del puntero del mouse y el elemento arrastrable.
    posX = e.clientX - divArrastrable.offsetLeft;
    posY = e.clientY - divArrastrable.offsetTop;
});

// Agrega un event listener al objeto 'document' para detectar el evento 'mousemove'.
document.addEventListener('mousemove', (e) => {
    // Verifica si la variable 'arrastrando' es verdadera.
    if (arrastrando) {
        // Obtiene el ancho y alto del elemento arrastrable.
        const { offsetWidth, offsetHeight } = divArrastrable;
        // Define los límites de movimiento para el elemento arrastrable.
        const limiteIzquierdo = 0, limiteSuperior = 0;
        const limiteDerecho = window.innerWidth - offsetWidth;
        const limiteInferior = window.innerHeight - offsetHeight;
        // Calcula las nuevas posiciones del elemento arrastrable y verifica que estén dentro de los límites.
        let nuevaPosX = Math.max(limiteIzquierdo, Math.min(limiteDerecho, e.clientX - posX));
        let nuevaPosY = Math.max(limiteSuperior, Math.min(limiteInferior, e.clientY - posY));
        // Actualiza la posición del elemento arrastrable utilizando las nuevas posiciones.
        divArrastrable.style.left = `${nuevaPosX}px`;
        divArrastrable.style.top = `${nuevaPosY}px`;
    }
});

// Agrega un event listener al objeto 'document' para detectar el evento 'mouseup'.
document.addEventListener('mouseup', () => {
    // Establece la variable 'arrastrando' en false.
    arrastrando = false;
});
