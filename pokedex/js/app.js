//'https://pokeapi.co/api/v2'

//crear un array para guadar informacion
let box =[];
//sincronisar el dom 
document.addEventListener('DOMContentLoaded',async function(){
    const pokemonBox = document.querySelector('.pokemom-box');

//llamar y concetar la api a nuestra pagina y asi consegui los pokemons
const network = await fetch('https://pokeapi.co/api/v2');
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