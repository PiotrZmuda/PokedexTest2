import { useContext } from "react";
// import FavoriteContext from "../../context/favoriteContext";
import FavoriteContext from "../../context/FavoriteContext2";
import useFavoritePokemons from "../../hooks/useFavotitePokemons";
import Pagination from "../Pagination";
import styled from "styled-components";
import PokemonCard from "../PokemonCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Favorite = () => {
  const { pokemons, loading, page, totalPages, setPage } = useFavoritePokemons(15); //liczba kart pokemonów
  const { favoritePokemons } = useContext(FavoriteContext);

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
      <div>
        <h2>Ulubione pokemony ({favoritePokemons.length})</h2>
      </div>
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
          {pokemons &&
            pokemons.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </div>
      )}
    </Container>
  );
};

export default Favorite;
