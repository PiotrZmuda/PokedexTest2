import { useState, useEffect, useContext } from 'react';
// import FavoriteContext from '../context/favoriteContext';
import FavoriteContext from '../context/FavoriteContext2';
import { getPokemonData } from '../../api';

export default function useFavoritePokemons(cardsPerPage) {
  // const { favoritePokemons } = useContext(FavoriteContext);
  const { favoritePokemons } = useContext(FavoriteContext);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [favoritePokemonsData, setFavoritePokemonsData] = useState([]);
  const [totalPages, setTotalPages] = useState(0); // Możesz to wyliczyć

  useEffect(() => {
    const fetchFavoritePokemons = async () => {
      setLoading(true);
      const filteredFavorites = favoritePokemons.slice(page * cardsPerPage, (page + 1) * cardsPerPage);
      console.log("favoritePokemons", favoritePokemons)
      const promises = filteredFavorites.map((pokemonName) => 
        getPokemonData(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`));

      const pokemonsData = await Promise.all(promises);
      setFavoritePokemonsData(pokemonsData);
      setLoading(false);
      setTotalPages(Math.ceil(favoritePokemons.length / cardsPerPage));
    };

    fetchFavoritePokemons();
  }, [favoritePokemons, page, cardsPerPage]);

  return { pokemons: favoritePokemonsData, loading, page, setPage, totalPages };
}
