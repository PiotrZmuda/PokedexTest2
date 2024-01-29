import styled from "styled-components";
import { useContext } from "react";
import FavoriteContext from "../context/favoriteContext";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffff;
  width: 285px;
  margin: 7px;
  border-radius: 5px;
  box-shadow: 4px 4px 4px 1px;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
const PokemonName = styled.div`
  font-family: "Slackey", sans-serif;
  font-size: 20px;
  color: #0c0c0c;
  font-weight: 700;
  text-shadow: -1px -1px 0 yellow, 1px -1px 0 yellow, -1px 1px 0 yellow,
    1px 1px 0 yellow;
`;
const FeatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FeatureColumn = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FeatureValue = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
`;
const FeatureLabel = styled.div`
  font-size: 14px;
  color: #777;
`;
const FeatureLabelAbilities = styled(FeatureLabel)`
  display: flex;
  div {
    margin-right: 3px;
  }
`;

const PokemonCard2 = ({ pokemon }) => {
  const { favoritePokemons, updateFavoritesPokemons } = useContext(FavoriteContext);

  const onHeartClick = () => {
    updateFavoritesPokemons(pokemon.name);
    console.log("dodaj ulubionego pokemona");
  };

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🤍"

  return (
    <Card>
      <button onClick={onHeartClick}>{heart}</button>
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      

      <PokemonName>
        {pokemon.name.charAt(0).toUpperCase() +
          pokemon.name.slice(1).toLowerCase()}
      </PokemonName>
      <FeatureContainer>
        <FeatureColumn>
          <FeatureLabel>{pokemon.height}</FeatureLabel>
          <FeatureValue>Height</FeatureValue>
          <FeatureLabel>{pokemon.weight}</FeatureLabel>
          <FeatureValue>Weight</FeatureValue>
        </FeatureColumn>
        <FeatureColumn>
          <FeatureLabel> {pokemon.base_experience}</FeatureLabel>
          <FeatureValue>Base experience</FeatureValue>

          <FeatureLabelAbilities>
            {pokemon.abilities.map((ability, index) => {
              return <div key={index}>{ability.ability.name}</div>;
            })}
          </FeatureLabelAbilities>
          <FeatureValue>Ability</FeatureValue>
        </FeatureColumn>
      </FeatureContainer>
    </Card>
  );
};

export default PokemonCard2;

// import React from 'react';
// import styled from "styled-components";
// import usePokemons from "../hooks/usePokemons";

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

// const Pokemon = (props) => {
//     const { pokemon } = props;
//     console.log("Pokemon data:", pokemon);
//   return (
//     <Card>
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

// export default Pokemon;
