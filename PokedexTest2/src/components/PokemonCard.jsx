import styled from "styled-components";
import { useContext } from "react";
// import FavoriteContext from "../context/favoriteContext";
import FavoriteContext from "../context/FavoriteContext2";
import SelectedPokemonContext from "../context/SelectedPokemonContext";
import ArenaContext from "../context/ArenaContext";
import { useNavigate } from "react-router-dom";

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


const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  // const { updateFavoritePokemons, setSelectedPokemon, favoritePokemons,addToArena,removeFromArena,arenaPokemons } =useContext(FavoriteContext);
  const { updateFavoritePokemons, favoritePokemons} =useContext(FavoriteContext);
  const { setSelectedPokemon} =useContext(SelectedPokemonContext);
  const { addToArena,removeFromArena,arenaPokemons} =useContext(ArenaContext);

  const onHeartClick = (e) => {
    e.stopPropagation(); // Zapobiega wyzwalaniu onClick na Card gdy klikniemy na serce
    updateFavoritePokemons(pokemon.name);
  };
  const onCardClick = () => {
    setSelectedPokemon(pokemon);
    navigate("/Pokemon");
  };
  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🤍";
  
  const onSwordClick = (e) =>{
    e.stopPropagation()
    if(arenaPokemons.includes(pokemon)){
      removeFromArena(pokemon.name)
    }else{
      addToArena(pokemon)
    }
    
  }
  // const sword = "⚔️"
  const sword = arenaPokemons.includes(pokemon) ? "⚔️ na arenie" :"⚔️"
  return (
    <Card onClick={onCardClick}>
      <button onClick={onHeartClick}>{heart}</button>
      <button onClick={onSwordClick}>{sword}</button>
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

export default PokemonCard;