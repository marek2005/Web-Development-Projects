const divArrastrable = document.querySelector('.arrastrable');
let posX, posY, arrastrando = false;

divArrastrable.addEventListener('mousedown', (e) => {
    arrastrando = true;
    posX = e.clientX - divArrastrable.offsetLeft;
    posY = e.clientY - divArrastrable.offsetTop;
});

document.addEventListener('mousemove', (e) => {
    if (arrastrando) {
        const { offsetWidth, offsetHeight } = divArrastrable;
        const limiteIzquierdo = 0, limiteSuperior = 0;
        const limiteDerecho = window.innerWidth - offsetWidth;
        const limiteInferior = window.innerHeight - offsetHeight;
        
        let nuevaPosX = Math.max(limiteIzquierdo, Math.min(limiteDerecho, e.clientX - posX));
        let nuevaPosY = Math.max(limiteSuperior, Math.min(limiteInferior, e.clientY - posY));
        
        divArrastrable.style.left = `${nuevaPosX}px`;
        divArrastrable.style.top = `${nuevaPosY}px`;
    }
});

document.addEventListener('mouseup', () => arrastrando = false);