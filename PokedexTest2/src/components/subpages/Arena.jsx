// import React from "react";
// import styled from "styled-components";
// import usePokemons from "../../hooks/usePokemons";

// function Arena() {
//   const { pokemons} = usePokemons(10); // Przykładowa liczba kart na stronie (10)
//   console.log("Tablica pokemonów", pokemons);
//   return (
//     <div>
//       <p>Arena</p>
//       {pokemons &&
//         pokemons.map((pokemon, index) => (
//           <div key={index}>
//             <div>Name {pokemon.name}</div>
//             <img alt={pokemon.name} src={pokemon.sprites.front_default} />
//             <div>Wysokośc {pokemon.height}</div>
//             <div>Waga {pokemon.weight}</div>
//             <div>Base experince{pokemon.base_experience}</div>
//             <div>
//               {pokemon.abilities.map((ability, index) => {
//                 return <div key={index}>{ability.ability.name}</div>;
//               })}
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// }
// export default Arena;

import React from "react";
import styled from "styled-components";
import usePokemons from "../../hooks/usePokemons";
import PokemonCard from "../PokemonCard";

function Arena() {
  const { pokemons,loading } = usePokemons(10); // Przykładowa liczba kart na stronie (10)
  console.log("Tablica pokemonów", pokemons);
  return (
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
  );
}

export default Arena;

