import { useState, useEffect } from 'react';
import { getPokemons, getPokemonData } from '../../api';

export default function useHomePokemons(cardsPerPage) {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const data = await getPokemons(cardsPerPage, cardsPerPage * page);
        const promises = data.results.map(({ url }) => getPokemonData(url));

        const pokemonsData = await Promise.all(promises);
        console.log("pokemonsData", pokemonsData)
        setPokemons(pokemonsData);
        setTotalPages(Math.ceil(150 / cardsPerPage));
        setLoading(false);
      } catch (error) {
        console.error("fetchPokemons error", error);
      }
    };

    fetchPokemons();
  }, [cardsPerPage, page]);

  return { pokemons, loading, page, setPage, totalPages };
}
