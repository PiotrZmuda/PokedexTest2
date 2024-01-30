
import { useState, createContext } from "react";

const FavoriteContext = createContext({ //createContext tworzy nowy kontekst, który jest obiektem zawierającym dane i funkcje,które będą dostępne dla wszystkich komponentów potomnych
  favoritePokemons: [],
  updateFavoritePokemons: () => {},
  selectedPokemon: null,
  setSelectedPokemon: () => {},

  arenaPokemons:[],
  addToArena:() =>{},
  removeFromArena: () =>{}

});

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [arenaPokemons, setArenaPokemons] = useState([])

  const addToArena = (pokemon) =>{
    if(arenaPokemons.length <2 && !arenaPokemons.includes(pokemon)){
      setArenaPokemons(prev => [...prev,pokemon])
    }
  }

  const removeFromArena = (name) => {
    setArenaPokemons(prev =>prev.filter(pokemon =>pokemon.name !==name))
  }

  const updateFavoritePokemons = (name) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.includes(name);// sprawdza czy name jest już w ulubionych
      return isAlreadyFavorite
        ? prevFavorites.filter((favorite) => favorite !== name)
        : [...prevFavorites, name];
    });
  };

  return (
    <FavoriteContext.Provider //owija dzieci i udostępnia im wartośc kontekstu
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons,
        selectedPokemon,
        setSelectedPokemon,
        arenaPokemons,
        addToArena,
        removeFromArena,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;

