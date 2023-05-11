const listaPokemon = document.querySelector("#listaPokemon");
let URL ="https://pokeapi.co/api/v2/pokemon/";

for (let i =1; 1<= 151; i++) {

    fetch(URL + i)
        .then((respone) => Response.json)
        .then(data => console.log(data))
}

function mostrarPokemon(data){


}