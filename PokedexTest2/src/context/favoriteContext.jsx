// import React from "react";
// import React, { useState, createContext } from "react";

// const FavoriteContext = React.createContext({
//   favoritePokemons: [],//(tablica ulubionych pokemonów)
//   updateFavoritePokemons: (id) => null,//(funkcja do aktualizacji ulubionych).

// });

// export const FavoriteProvider = FavoriteContext.Provider;//FavoriteProvider owija całą aplikację lub jej część i dostarcza wartości kontekstu

// export default FavoriteContext;

//favoriteContext
import React, { useState, createContext } from "react";

const FavoriteContext = createContext({
  favoritePokemons: [],
  updateFavoritePokemons: () => {},
  selectedPokemon: null,
  setSelectedPokemon: () => {},
});

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const updateFavoritePokemons = (name) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.includes(name);
      return isAlreadyFavorite
        ? prevFavorites.filter((favorite) => favorite !== name)
        : [...prevFavorites, name];
    });
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons,
        selectedPokemon,
        setSelectedPokemon,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;

