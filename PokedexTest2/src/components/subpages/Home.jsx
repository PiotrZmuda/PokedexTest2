import React from "react";
import styled from "styled-components";
import usePokemons from "../../hooks/usePokemons";
import PokemonCard from "../PokemonCard";
import PokemonCard2 from "../PokemonCard2";

const Home = () => {
  const { pokemons, loading } = usePokemons(10); // Przykładowa liczba kart na stronie (10)
  console.log("Tablica pokemonów", pokemons);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
        {pokemons &&
          pokemons.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} /> 
          ))}
      </div>
      )}
    </div>
  );
};

export default Home;
