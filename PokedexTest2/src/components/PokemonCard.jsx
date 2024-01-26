import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <div>
      <div>Name {pokemon.name}</div>
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      <div>Wysokość {pokemon.height}</div>
      <div>Waga {pokemon.weight}</div>
      <div>Base experience {pokemon.base_experience}</div>
      <div>
        {pokemon.abilities.map((ability, index) => (
          <div key={index}>{ability.ability.name}</div>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
