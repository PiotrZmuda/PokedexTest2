import { useState, createContext } from "react";

const SelectedPokemonContext = createContext({
  selectedtPokemon: null,
  setSelectedPokemon: () => {},
});

export const SelectedPokemonProvider = ({ children }) => {
  const [selectedtPokemon, setSelectedPokemon] = useState(null);

  //logika

  return (
    <SelectedPokemonContext.Provider
      value={{ selectedtPokemon, setSelectedPokemon }}
    >
      {children}
    </SelectedPokemonContext.Provider>
  );
};
export default SelectedPokemonContext