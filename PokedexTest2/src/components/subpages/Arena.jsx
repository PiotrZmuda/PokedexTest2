import React, { useContext, useState } from "react";
import styled from "styled-components";
// import FavoriteContext from "../../context/favoriteContext";
import ArenaContext from "../../context/ArenaContext";
import PokemonCard from "../PokemonCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Arena = () => {
  const { arenaPokemons, removeFromArena } = useContext(ArenaContext);
  const [battleResult, setBattleResult] = useState("");

  const calculateDamage = (attacker, defender) => {
    // Prosta formuła do obliczenia obrażeń
    const damage = attacker.weight / defender.height;
    return damage;
  };

  const simulateBattle = () => {
    let pokemon1 = { ...arenaPokemons[0] };
    let pokemon2 = { ...arenaPokemons[1] };

    const damage1 = calculateDamage(pokemon1, pokemon2);
    const damage2 = calculateDamage(pokemon2, pokemon1);

    const winner =
      pokemon1.base_experience - damage2 > pokemon2.base_experience - damage1
        ? pokemon1.name
        : pokemon2.name;

    setBattleResult(`${winner} wygrywa walkę!`);
  };

    return (
    <Container>
      <div>
        {arenaPokemons.length === 0 && <p>Brak pokemonów na Arenie</p>}
        <button onClick={simulateBattle}>Rozpocznij walkę</button>
        <div>{battleResult}</div>
        {arenaPokemons.map((pokemon, index) => (
          <div key={index}>
            <PokemonCard pokemon={pokemon} />
            <button onClick={() => removeFromArena(pokemon.name)}>Usuń</button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Arena;