import React from "react";
import styled from "styled-components";
import useHomePokemons from "../../hooks/useHomePokemons";
import PokemonCard from "../PokemonCard";
import Pagination from "../Pagination";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const { pokemons, loading, page, setPage, totalPages } = useHomePokemons(15); // Przykładowa liczba kart na stronie (10);

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
                <PokemonCard key={index} pokemon={pokemon} />
              ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
