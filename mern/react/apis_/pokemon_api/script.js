const onClick = () => {
    unorderedList = document.querySelector("#pokemonList")
    for(let i = 1; i <= 807; i++){
        console.log(i)
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((response) => response.json()).then((pokemon) => {
            // console.log(pokemon)
            unorderedList.innerHTML += `<li>${pokemon.id} ${pokemon.name}</li>`
        })
    }
}