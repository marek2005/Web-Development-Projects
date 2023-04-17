¡Bienvenido al prototipo de código HTML, CSS y JS para hacer objetos arrastrables!

Este prototipo incluye tres archivos:

`index.html`: Este archivo contiene el esqueleto de la página web y los elementos HTML que deseamos que sean arrastrables.<br>
`style.css`: Este archivo contiene la hoja de estilo para dar formato a los elementos HTML.<br>
`script.js`: Este archivo contiene el código JavaScript que permite arrastrar los elementos HTML.
## Cómo usar este prototipo
Para hacer que un elemento HTML sea arrastrable, simplemente agrega la clase `"arrastrable"` a ese elemento. El código JavaScript buscará todos los elementos con la clase `"arrastrable"` y les agregará los eventos necesarios para permitir arrastrarlos.
## Ejemplo
### html
```
<div class="arrastrable">
  <p>Este elemento es arrastrable.</p>
</div>
```
En este ejemplo, hemos agregado la clase `"arrastrable"` a un `div` que contiene un párrafo. Ahora, cuando el usuario haga clic y arrastre este `div`, podrá moverlo por la página.

## Personalización
Si deseas personalizar la forma en que los elementos se arrastran, puedes modificar el código en `script.js`. Por ejemplo, puedes cambiar la opacidad del elemento mientras se arrastra o ajustar el comportamiento del cursor.

¡Diviértete explorando este prototipo y creando objetos arrastrables para tu sitio web!
