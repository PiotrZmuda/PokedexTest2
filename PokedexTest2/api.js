export const getPokemons = async(limit = 0, offset = 0) =>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    }catch(error){
        console.log("error", error)
    }
}

export const getPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log("error", error);
    }
  };
  
