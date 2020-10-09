
(() => {
    class Pokemonager {
      findNames(n) {
        // Your code here.
        //https://pokeapi.co/api/v2/pokemon/
        return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${n}`)
        .then(res => res.json())
        .then(json => json.results)
        .then(arr => arr.map(x => x.name))
      }
  
      // This should return an array of all the Pokemon that are under a particular weight.
  
      findUnderWeight(weight) {
        let list = [];
  
        for(let i = 1; i <= 10; i++) {
          list.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(res => res.json())
            )
        }
        return Promise.all(list)
          .then(arr => arr.filter(pokemon => pokemon.weight < weight))
      }
    }
    //window.Pokemonager = Pokemonager;
  })();