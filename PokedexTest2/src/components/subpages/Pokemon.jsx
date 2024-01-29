import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useContext} from "react";
import FavoriteContext from "../../context/favoriteContext";
import PokemonCard from "../PokemonCard";


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

function Pokemon() {
  const {selectedPokemon} = useContext(FavoriteContext)
  const navigate = useNavigate()

  const onBtnClick = () => {
    navigate("/")
  };

  if(!selectedPokemon){
    return<div>proszę wybrać pokemona</div>
  }
    return (
      <Container>
        <PokemonCard pokemon={selectedPokemon} />
        <button onClick={onBtnClick}>Strona Główna</button>
        
      </Container>
    );
  }
  export default Pokemon