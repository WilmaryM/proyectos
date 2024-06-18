
    // URL base de la API
const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Función para obtener y mostrar pokemons
async function fetchAndDisplayPokemons() {
  try {
    // Obteniendo la lista inicial de pokemons con parámetros de paginación
    const response = await fetch(`${API_BASE_URL}?offset=0&limit=20`);
    const data = await response.json();
    const pokemons = data.results; // Array de objetos pokemon

    // Seleccionando el contenedor para añadir detalles de pokemons
    const pokemonList = document.querySelector(".pokemon-list");
    const filtrarBtn = document.querySelector(".pokemom-box");

    // Limpiando la lista de pokemons existente (filtrarBtns del HTML) antes de añadir nuevos
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
          filtrarBtn.cloneNode(true)
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
function createPokemonElement(pokemonData, elementfiltrarBtn) {
  const { sprites, id, name, base_experience, types } = pokemonData;

  // Estableciendo fuente de imagen y atributos
  const pokeImg = elementfiltrarBtn.querySelector("img");
  pokeImg.src = sprites.other["official-artwork"].front_default;

  // Estableciendo ID de pokemon
  const pokeId = elementfiltrarBtn.querySelector(".idPokemon");
  pokeId.textContent = `ID: #${id}`;
  const pokeIdBack = elementfiltrarBtn.querySelector(".pokemon-id-back");
  pokeIdBack.textContent=`#${id}`;

  // Estableciendo nombre de pokemon
  const pokemonName = elementfiltrarBtn.querySelector(".name-poke");
  pokemonName.textContent = `Name: ${name}`;

  // Estableciendo experiencia de pokemon
  const pokeExp = elementfiltrarBtn.querySelector(".experencia");
  pokeExp.textContent = `EXP: ${base_experience}`;

  // Estableciendo tipo de pokemon
  const pokeType = elementfiltrarBtn.querySelector(".tipo");
  pokeType.textContent =`Tipo: ${types[0].type.name}` ;
  pokeType.textContent = `Tipo: ${types[0].type.name}` ;
/*
let tipos = poke.types.map((type) => `<div class="${type.type.name} tipo">${type.type.name}</div>`);
    tipos = tipos.join('');
*/
  return elementfiltrarBtn;
}


/* -------------------------------------input de buscar y lupita  --------------------------------------*/
// Estableciendo filtro de busqueda por el nombre
//seleccionando los botones y el input
  const input = document.getElementById("buscar"); 
  const btnLupita = document.getElementById('lupa')

  btnLupita.addEventListener('click', () => {
    let buscador = input.value.toLocaleLowerCase();  
    const pokemonBox = document.querySelectorAll('.pokemom-box');

    pokemonBox.forEach((e) => {
      let names = document.querySelectorAll('.name-poke');

        names.forEach((name, index) => {
            if(name.textContent.includes(buscador)){
              pokemonBox[index].classList.add('activo')
            }
              else{
                pokemonBox[index].classList.remove('activo')
              };
          })
        
          });
          if (input.value === ''){
            btnLupita = location.reload();
          }
      });



      /*----------------------------------------boton de pokemon ramdon*---------------------------------------------------*/
      //llamando elemntos del dom 
      const btnRandom = document.getElementById('btn-random');
      //mi lista o array
      const pokemonList = document.querySelector('.pokemon-list');
      //console.log(pokemonList);

      btnRandom.addEventListener('click', function(){
       let randomIndex = Math.floor(Math.random() * pokemonList.length);//se valor es NaN 
      let randomPokemonListItem = pokemonList.children[randomIndex];
      });
/*------------------------------------------------------filtro de busqueda por tipo-------------------------------------- */

const filtrarBtn = document.querySelectorAll(".fitro-btn" )

/*filtrarBtn.forEach(botn => botn.addEventListener('click', (e) =>{
 const pokemonid = e.target.id;
 
 pokemonList.innerHTML = '';

 
if(filtrarBtn === "ver todos"){
  createPokemonElement(data)
}
 const tipos = data.types.map(type => type.name);
 if(tipos.some(tipo => tipo.includes(pokemonid))){
  createPokemonElement(data)
 }
 
  
}))*/



/*for (let index = 0; index < filtrarBtn.length; index++) {
    filtrarBtn[index].addEventListener( "click", filtrar);
  
}
    function filtrar(e){
      let filtrarTipo = e.srcElement.id;
      const pokemonBox = document.querySelectorAll('.pokemom-box');

      pokemonBox.forEach((element) => {
        let tipos = document.querySelectorAll('.tipo');

          
        tipos.forEach((tipo, index) => {
          if(tipo.textContent == filtrarTipo){
            pokemonBox[index].classList.add('activo');
          }else{
            pokemonBox[index].classList.remove('activo');
          }
        });

  });
};
*/













// Inicializar el código luego de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", fetchAndDisplayPokemons);
  