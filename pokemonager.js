(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    // findNames(n) {
    //   const names=[];
    //   // Your code here.
    //   fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=${n}`)
    //   .then(res => res.json())
    //   .then(json => json.results)
    //   .then(arr =>  Promise.all(arr.forEach(element=>names.push(element.push))))

    // }

    findNames(n) {
      // Your code here.
      //https://pokeapi.co/api/v2/pokemon/
      fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=${n}`)
      .then(res => res.json())
      .then(json => json.results)
      .then(arr =>  {
        return arr.map(element => element.name)
        //return arr.forEach(element=>names.push(element.push));
      })
    }

    // This should return an array of all the Pokemon that are under a particular weight.

    findUnderWeight(weight) {
      // Your code here.
      // ** LIMIT TO THE FIRST 10 POKEMON
      // We don't want to make too many unnecessary calls to the Pokemon API
    }
  }

  window.Pokemonager = Pokemonager;
})();
