// import styled from "styled-components";
// import { useContext } from "react";
// import FavoriteContext from "../../context/favoriteContext";

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #ffff;
//   width: 285px;
//   margin: 7px;
//   border-radius: 5px;
//   box-shadow: 4px 4px 4px 1px;
//   transition: transform 0.1s ease-in-out;
//   &:hover {
//     transform: scale(1.05);
//   }
// `;
// const PokemonName = styled.div`
//   font-family: "Slackey", sans-serif;
//   font-size: 20px;
//   color: #0c0c0c;
//   font-weight: 700;
//   text-shadow: -1px -1px 0 yellow, 1px -1px 0 yellow, -1px 1px 0 yellow,
//     1px 1px 0 yellow;
// `;
// const FeatureContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
// const FeatureColumn = styled.div`
//   padding: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const FeatureValue = styled.div`
//   font-weight: 700;
//   font-size: 16px;
//   margin-bottom: 5px;
// `;
// const FeatureLabel = styled.div`
//   font-size: 14px;
//   color: #777;
// `;
// const FeatureLabelAbilities = styled(FeatureLabel)`
//   display: flex;
//   div {
//     margin-right: 3px;
//   }
// `;

// const TestFavorite = (props) => {
//   const { favoritePokemons, updateFavoritesPokemons } = useContext(FavoriteContext);
//   const { pokemon } = props;
//   console.log("tablica ulubionych pokemonów",favoritePokemons)

//    // Filtruj pokemony na podstawie listy ulubionych
//    const favoritePokemonData = pokemons.filter((pokemon) =>
//    favoritePokemons.includes(pokemon.name)
//  );

//   const onHeartClick = () => {
//     updateFavoritesPokemons(pokemon.name);
//     console.log("dodaj ulubione");
//   };

//   const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🤍";
//   // const heart = favoritePokemons.some((p) => p.name === pokemon.name) ? "❤️" : "🤍";
//   return (
//     <Card>
//       <button onClick={onHeartClick}>{heart}</button>
//       <img alt={pokemon.name} src={pokemon.sprites.front_default} />

//       <PokemonName>
//         {pokemon.name.charAt(0).toUpperCase() +
//           pokemon.name.slice(1).toLowerCase()}
//       </PokemonName>
//       <FeatureContainer>
//         <FeatureColumn>
//           <FeatureLabel>{pokemon.height}</FeatureLabel>
//           <FeatureValue>Height</FeatureValue>
//           <FeatureLabel>{pokemon.weight}</FeatureLabel>
//           <FeatureValue>Weight</FeatureValue>
//         </FeatureColumn>
//         <FeatureColumn>
//           <FeatureLabel> {pokemon.base_experience}</FeatureLabel>
//           <FeatureValue>Base experience</FeatureValue>

//           <FeatureLabelAbilities>
//             {pokemon.abilities.map((ability, index) => {
//               return <div key={index}>{ability.ability.name}</div>;
//             })}
//           </FeatureLabelAbilities>
//           <FeatureValue>Ability</FeatureValue>
//         </FeatureColumn>
//       </FeatureContainer>
//     </Card>
//   );
// };

// export default TestFavorite;

// //klon
import React, { useContext } from "react";
import FavoriteContext from "../../context/favoriteContext";
import Pagination from "../Pagination";
import usePokemons from "../../hooks/usePokemons";
// { pokemon, loading, page, setPage, totalPages }

const Favorite = () => {
  const { pokemons, loading, page, totalPages, setPage } = usePokemons(10);
  console.log("pokemon", pokemons);
  const { favoritePokemons } = useContext(FavoriteContext);

  // Filtruj pokemony na podstawie listy ulubionych
  const favoritePokemonData = pokemons.filter((pokemon) =>
    favoritePokemons.includes(pokemon.name)
  );
  console.log("Favorite test test test", favoritePokemons);
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
    <div>
      <div>
        <div>
          <Pagination
            page={page + 1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
          />
        </div>
      </div>
      {favoritePokemonData.map((pokemon) => (
        <div key={pokemon.name}>
          <h2>{pokemon.name}</h2>
          <div>Wysokosć: {pokemon.height}</div>
          <div>Waga:{pokemon.weight}</div>
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
          <div>
            {pokemon.abilities.map((ability, index) => {
              return <div key={index}>{ability.ability.name}</div>;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
