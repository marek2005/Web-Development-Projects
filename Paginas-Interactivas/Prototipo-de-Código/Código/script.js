const elementosArrastrables = document.querySelectorAll('.arrastrable');

elementosArrastrables.forEach((elemento) => {
  let posX, posY, arrastrando = false;

  // Agrega un event listener al elemento actual para detectar el evento 'mousedown'.
  elemento.addEventListener('mousedown', (e) => {
    // Establece la variable 'arrastrando' en true.
    arrastrando = true;
    // Calcula la posición relativa del puntero del mouse y el elemento arrastrable.
    posX = e.clientX - elemento.offsetLeft;
    posY = e.clientY - elemento.offsetTop;
  });

  // Agrega un event listener al objeto 'document' para detectar el evento 'mousemove'.
  document.addEventListener('mousemove', (e) => {
    // Verifica si la variable 'arrastrando' es verdadera.
    if (arrastrando) {
      // Obtiene el ancho y alto del elemento arrastrable.
      const { offsetWidth, offsetHeight } = elemento;
      // Define los límites de movimiento para el elemento arrastrable.
      const limiteIzquierdo = 0, limiteSuperior = 0;
      const limiteDerecho = window.innerWidth - offsetWidth;
      const limiteInferior = window.innerHeight - offsetHeight;
      // Calcula las nuevas posiciones del elemento arrastrable y verifica que estén dentro de los límites.
      let nuevaPosX = Math.max(limiteIzquierdo, Math.min(limiteDerecho, e.clientX - posX));
      let nuevaPosY = Math.max(limiteSuperior, Math.min(limiteInferior, e.clientY - posY));
      // Actualiza la posición del elemento arrastrable utilizando las nuevas posiciones.
      elemento.style.left = `${nuevaPosX}px`;
      elemento.style.top = `${nuevaPosY}px`;
    }
  });

  // Agrega un event listener al objeto 'document' para detectar el evento 'mouseup'.
  document.addEventListener('mouseup', () => {
    // Establece la variable 'arrastrando' en false.
    arrastrando = false;
  });
});