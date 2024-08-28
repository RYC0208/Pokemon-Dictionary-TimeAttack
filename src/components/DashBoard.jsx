import React from "react";
import PokemonCard from "./PokemonCard";
import { usePokemon } from "../contexts/PokemonContext";
import styled from "styled-components";
const DashBoard = () => {
  const { selectedPokemon } = usePokemon();
  return (
    <StContainer>
      <h1>포켓몬 컬렉션</h1>
      <div className="pokemonGroup">
        {selectedPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={true} />
        ))}
      </div>
    </StContainer>
  );
};

export default DashBoard;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #9bd0ff;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  h1{
    color: #2a9cff;
  }
  .pokemonGroup{
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
  }

`;
