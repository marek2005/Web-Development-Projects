// todo este codigo es necesario
const elementosArrastrables = document.querySelectorAll('.arrastrable');

elementosArrastrables.forEach((elemento) => {
  let posX, posY, arrastrando = false;

  // Agrega un event listener al elemento actual para detectar el evento 'mousedown'.
  elemento.addEventListener('mousedown', (e) => {
    arrastrando = true;
    posX = e.clientX - elemento.offsetLeft;
    posY = e.clientY - elemento.offsetTop;
  });

  // Agrega un event listener al objeto 'document' para detectar el evento 'mousemove'.
  document.addEventListener('mousemove', (e) => {

    if (arrastrando) {
      const { offsetWidth, offsetHeight } = elemento;
      const limiteIzquierdo = 0, limiteSuperior = 0;
      const limiteDerecho = window.innerWidth - offsetWidth;
      const limiteInferior = window.innerHeight - offsetHeight;
      let nuevaPosX = Math.max(limiteIzquierdo, Math.min(limiteDerecho, e.clientX - posX));
      let nuevaPosY = Math.max(limiteSuperior, Math.min(limiteInferior, e.clientY - posY));
      elemento.style.left = `${nuevaPosX}px`;
      elemento.style.top = `${nuevaPosY}px`;
    }
  });

  // Agrega un event listener al objeto 'document' para detectar el evento 'mouseup'.
  document.addEventListener('mouseup', () => {
    arrastrando = false;
  });
});
