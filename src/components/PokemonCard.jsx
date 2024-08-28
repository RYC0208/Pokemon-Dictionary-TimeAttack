import React from "react";
import styled from "styled-components";
const PokemonCard = ({ pokemon, isSelected, addPokemon, deletePokemon, goToDetail }) => {
  return (
    <StContainer onClick={() => goToDetail(pokemon.id)}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <p>No. {pokemon.id}</p>
      {isSelected ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            deletePokemon(pokemon.id);
          }}
        >
          삭제
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            addPokemon(pokemon);
          }}
        >
          추가
        </button>
      )}
    </StContainer>
  );
};

export default PokemonCard;

const StContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;

  img {
    width: 100px;
    height: 100px;
  }
  h3 {
    font-size: 20px;
  }
`;
