import React from "react";
import styled from "styled-components";
import usePokemons from "../../hooks/usePokemons";
import PokemonCard2 from "../PokemonCard2";
import Pagination from "../Pagination";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const { pokemons, loading, page, setPage, totalPages } = usePokemons(10); // Przykładowa liczba kart na stronie (10)
  console.log("Tablica pokemonów", pokemons);

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

  return (
    <Container>
      <Pagination
        page={page + 1}
        totalPages={totalPages}
        onLeftClick={onLeftClickHandler}
        onRightClick={onRightClickHandler}
      />
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {pokemons &&
              pokemons.map((pokemon, index) => (
                <PokemonCard2 key={index} pokemon={pokemon} />
              ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
