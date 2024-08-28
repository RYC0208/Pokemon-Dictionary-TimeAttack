import React from "react";
import PokemonCard from "./PokemonCard";

const DashBoard = ({ selectedPokemon, deletePokemon, goToDetail }) => {
  return (
    <div>
      <h1>포켓몬 컬렉션</h1>
      {selectedPokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          goToDetail={goToDetail}
          pokemon={pokemon}
          isSelected={true}
          deletePokemon={deletePokemon}
        />
      ))}
    </div>
  );
};

export default DashBoard;
