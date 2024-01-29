import React from "react";

const FavoriteContext = React.createContext({
  favoritePokemons: [],//(tablica ulubionych pokemonów) 
  
  updateFavoritePokemons: (id) => null,//(funkcja do aktualizacji ulubionych).
});

export const FavoriteProvider = FavoriteContext.Provider;//FavoriteProvider owija całą aplikację lub jej część i dostarcza wartości kontekstu

export default FavoriteContext;
