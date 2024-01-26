import { useState, useEffect } from "react";
import { getPokemons, getPokemonData } from "../../api";

const usePokemons = (cardsPerPage) => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const data = await getPokemons(cardsPerPage, cardsPerPage * page);
        console.log("usePokemons data", data);
        const allPokemonCards = 150;
        const promises = data.results.map(({ url }) => getPokemonData(url));

        const pokemonsData = await Promise.all(promises);
        console.log("usePokemons pokemonsData", pokemonsData);

        setPokemons(pokemonsData);
        setLoading(false);
        setTotalPages(Math.ceil(allPokemonCards / cardsPerPage));
      } catch (error) {
        console.error("fetchPokemons error", error);
      }
    };

    fetchPokemons();
  }, [cardsPerPage, page]);
  return { pokemons, loading, page, setPage, totalPages };
};

export default usePokemons;
