import { createContext, useState } from "react";

const ArenaContext = createContext({
  arenaPokemons: [],
  addToArena: () => {},
  removeFromArena: () => {},
});

export const ArenaProvider = ({ children }) => {
  const [arenaPokemons, setArenaPokemons] = useState([]);
  
  const addToArena = (pokemon) => {
    if (arenaPokemons.length < 2 && !arenaPokemons.includes(pokemon)) {
      setArenaPokemons((prev) => [...prev, pokemon]);
    }
  };

  const removeFromArena = (name) => {
    setArenaPokemons((prev) => prev.filter((pokemon) => pokemon.name !== name));
  };
  return (
    <ArenaContext.Provider
      value={{ arenaPokemons, addToArena, removeFromArena }}
    >
      {children}
    </ArenaContext.Provider>
  );
};
export default ArenaContext;