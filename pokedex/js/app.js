/*'https://pokeapi.co/api/v2'

//crear un array para guadar informacion
let box =[];
//sincronisar el dom 
document.addEventListener('DOMContentLoaded',async function(){
    const pokemonBox = document.querySelector('.pokemom-box');

//llamar y concetar la api a nuestra pagina y asi consegui los pokemons
const network = await fetch('https://pokeapi.co/api/v2/pokemon');
const data = await network.json();


this.box = data.box;
data.box.forEach(async (pokemon) => {
    // Clonar / Agregar elementos dentro de un array por cada pokemon
    const unPokemon = pokemonBox.cloneNode(true);

    // Agregar información de este pokemon
    const namePoke = unPokemon.querySelector('.name-poke');
    namePoke.textContent = pokemon.name;
    console.log(namePoke);
});
});
/*Tengo este error
app.js:15 Uncaught (in promise)
 TypeError: Cannot read properties
  of undefined (reading 'forEach') 
     at HTMLDocument.<anonymous> 
     (app.js:15:10)(an%C3%B3nimo)@app.js:15
     */

     /* segundo intento 

     // llamamos la api
     const apiPokemon = "https://pokeapi.co/api/v2/pokemon";
     // creamos el array pero le ponemos los datos  
     const box = (pokemons) => {
     const {img, id, name, base_experience, type} = pokemons;

     const pokeName = document.querySelectorAll('.name-poke');
     pokeName.textContent = name;
        
    const imgPoke = document.querySelector('.img-poke');
    imgPoke.src = img;
    imgPoke.width = 300;

    const idPoke = document.querySelector('.idPokemon');
    idPoke.textContent = id;

        const pokeExperencia = document.querySelector('.experencia');
        pokeExperencia.textContent = base_experience;

        const pokeType = document.querySelector(".tipo");
        pokeType.textContent = type[0].type.name;
        pokeType.id = type[0].type.name;
    

    }
   
*/

//intento 3
const apiPokemon = "https://pokeapi.co/api/v2/pokemon/";

async function fecthPokemon(){
    try {
        const response = await fetch(apiPokemon);
        const data = await response.json();
        const pokemons = data.results;// array of pokemons object

   pokemons.forEach((pokemon) => {
            //Esta funcion consigue los detalles del pokemon, recibe una URL.
            fetch(pokemon.url)
            .then((response) => response.json())
            .then((pkemonDetails) => {
                box(pkemonDetails); //call box fuction with details
            }) 
      .catch((error) => console.error(error));
        });
   
    } catch (error) {
        console.error(error);
    }
}

fecthPokemon();// Call the function to start fetching and displaying

const box = (pokemon) => {
    const {img, id, name, base_experience, type} = pokemon;
  const pokemonBox = document.querySelector('.pokemom-box')

 /* pokemon.forEach((pokemon) =>{
    
  })*/
        
    const pokeName = document.querySelectorAll('.name-poke');
    pokeName.textContent = pokemon.name;
    
    const imgPoke = document.querySelector('.img-poke');
    imgPoke.src = pokemon.sprites.front_default;// Assuming image URL in sprites
    imgPoke.width = 300;

    const idPoke = document.querySelector('.idPokemon');
    idPoke.textContent = pokemon.id;

    const pokeExperencia = document.querySelector('.experencia');
    pokeExperencia.textContent = pokemon.base_experience;

    const pokeType = document.querySelector(".tipo");
    const typePrimary = pokemon.types[0].type.name;
    pokeType.textContent = typePrimary;
    pokeType.id = typePrimary;
};