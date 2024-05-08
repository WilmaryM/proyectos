
    // URL base de la API
const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Función para obtener y mostrar pokemons
async function fetchAndDisplayPokemons() {
  try {
    // Obteniendo la lista inicial de pokemons con parámetros de paginación
    const response = await fetch(`${API_BASE_URL}?offset=20&limit=20`);
    const data = await response.json();
    const pokemons = data.results; // Array de objetos pokemon

    // Seleccionando el contenedor para añadir detalles de pokemons
    const pokemonList = document.querySelector(".pokemon-list");
    const template = document.querySelector(".pokemom-box");

    // Limpiando la lista de pokemons existente (templates del HTML) antes de añadir nuevos
    while (pokemonList.firstChild) {
      pokemonList.removeChild(pokemonList.firstChild);
    }

    // Iterando sobre cada pokemon para obtener datos detallados
    pokemons.forEach(async (pokemon) => {
      try {
        const detailsResponse = await fetch(pokemon.url);
        const detailsData = await detailsResponse.json();
        const pokemonElement = createPokemonElement(
          detailsData,
          template.cloneNode(true)
        );
        pokemonList.appendChild(pokemonElement);
      } catch (error) {
        console.error("Error al obtener detalles del pokemon:", error);
      }
    });
  } catch (error) {
    console.error("Error al obtener datos iniciales de pokemons:", error);
  }
}

// Función para crear un elemento DOM para un pokemon
function createPokemonElement(pokemonData, elementTemplate) {
  const { sprites, id, name, base_experience, types } = pokemonData;

  // Estableciendo fuente de imagen y atributos
  const pokeImg = elementTemplate.querySelector("img");
  pokeImg.src = sprites.front_default;

  // Estableciendo ID de pokemon
  const pokeId = elementTemplate.querySelector(".idPokemon");
  pokeId.textContent = `ID: ${id}`;

  // Estableciendo nombre de pokemon
  const pokemonName = elementTemplate.querySelector(".name-poke");
  pokemonName.textContent = name;

  // Estableciendo experiencia de pokemon
  const pokeExp = elementTemplate.querySelector(".experencia");
  pokeExp.textContent = `XP: ${base_experience}`;

  // Estableciendo tipo de pokemon
  const pokeType = elementTemplate.querySelector(".tipo");
  pokeType.textContent = types[0].type.name;

  return elementTemplate;
}

// Estableciendo filtro de busqueda por el nombre

//seleccionando los botones y el input
  const input = document.getElementById("buscar");
  const btn = document.querySelector(".lupita");
  










// Inicializar el código luego de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", fetchAndDisplayPokemons);

