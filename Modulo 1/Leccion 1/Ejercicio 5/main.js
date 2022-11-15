const pokemones = ["Bulbasaur", "Charmander", "Charmaleon"];

for (let ipokemon=0; ipokemon<pokemones.length; ipokemon++){
    console.log (pokemones[ipokemon]);
};

function enUnaLinea() {

    pokemones.forEach(pokemon => {console.log(pokemon) });
};
