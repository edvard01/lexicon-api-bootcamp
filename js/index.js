async function getAllPokemon() {
  try {
    const response = await fetch(
      "https://majazocom.github.io/Data/pokemons.json"
    );
    const data = await response.json();
    renderPokemonConsole(data);
    renderPokemonDOM(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

function renderPokemonConsole(pokemon) {
  for (let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i].name);
  }
  return pokemon;
}

function renderPokemonDOM(pokemon) {
  const list = document.querySelector(".pokemon-list");

  pokemon.forEach((item) => {
    list.innerHTML += `<h4>${item.name}</h4>`;
  });
}

getAllPokemon();
