import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import useHomePokemons from "../../hooks/useHomePokemons";
import PokemonCard from "../PokemonCard";
import Pagination from "../Pagination";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const { pokemons, loading, page, setPage, totalPages } = useHomePokemons(15);
  const [searchPokemon, setSearchPokemon] = useState("");
  const filteredPokemons = searchPokemon
    ? pokemons.filter(
        (
          pokemon //pokemons wsyztskie pokemony na stronie
        ) => pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
      )
    : pokemons;

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  const handleSearchChange = (event) => { //aktualizuje searchTerm za każdym razem, gdy wpisuje tekst w polu wyszukiwania
    setSearchPokemon(event.target.value);
  };

  return (
    <Container>
      <TextField
        label="Wyszukaj Pokemona"
        variant="outlined"
        fullWidth
        value={searchPokemon}
        onChange={handleSearchChange}
        style={{ margin: "10px 0" }}
      />
      <Pagination
        page={page + 1}
        totalPages={totalPages}
        onLeftClick={onLeftClickHandler}
        onRightClick={onRightClickHandler}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {filteredPokemons.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Home;
