//todo el codigo es necesario
// Lista de objetos
const objetos = ['Ashe', 'Pyke', 'Blitzcrank', 'Ryze', 'Maokai', 'Drow Ranger', 'Slark', 'Pudge', 'Zeuz', 'TreantProtector', 'Miya', 'Helcurt', 'Franco', 'Eudora', 'Grock'];

// Obtener elementos HTML
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const objetosList = document.getElementById('heroes');
const resultContainer = document.querySelector('.result-container');

// Función para filtrar los héroes según la categoría seleccionada
function filterHeroes() {
  const category = filterSelect.value;
  const heroes = objetosList.getElementsByTagName('li');
  
  for (let i = 0; i < heroes.length; i++) {
    const hero = heroes[i];
    const heroClass = hero.getAttribute('class');
    
    if (category === '' || heroClass === category) {
      hero.style.display = 'block';
    } else {
      hero.style.display = 'none';
    }
  }
}

// Escuchar el evento "keyup" en el input de búsqueda
searchInput.addEventListener('keyup', function() {
  const searchValue = searchInput.value.toLowerCase();
  const heroes = objetosList.getElementsByTagName('li');
  
  for (let i = 0; i < heroes.length; i++) {
    const hero = heroes[i];
    const heroName = hero.innerHTML.toLowerCase();
    
    if (heroName.includes(searchValue)) {
      hero.style.display = 'block';
    } else {
      hero.style.display = 'none';
    }
  }
});

// Escuchar el evento "change" en el select de categorías
filterSelect.addEventListener('change', filterHeroes);

// Llamar a la función filterHeroes() al cargar la página para mostrar la lista filtrada según el valor inicial del select
filterHeroes();
