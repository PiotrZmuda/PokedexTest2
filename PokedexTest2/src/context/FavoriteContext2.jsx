import { useState, createContext } from "react";

const FavoriteContext = createContext({
  favoritePokemons: [],
  updateFavoritePokemons: () => {},
});

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Logika dla ulubionych Pokemonów
  const updateFavoritePokemons = (name) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.includes(name); // sprawdza czy name jest już w ulubionych
      return isAlreadyFavorite
        ? prevFavorites.filter((favorite) => favorite !== name)
        : [...prevFavorites, name];
    });
  };

  return (
    <FavoriteContext.Provider
      value={{ favoritePokemons: favorites, updateFavoritePokemons }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;