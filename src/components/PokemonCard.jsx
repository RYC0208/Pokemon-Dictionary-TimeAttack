import React from "react";
import styled from "styled-components";
import { usePokemon } from "../contexts/PokemonContext";
const PokemonCard = ({ pokemon, isSelected }) => {
  const { goToDetail, deletePokemon, addPokemon } = usePokemon();
  return (
    <StContainer onClick={() => goToDetail(pokemon.id)}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>No. {pokemon.id}</p>
      <h3>{pokemon.korean_name}</h3>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #9bd0ff;
  padding: 20px;
  border-radius: 10px;

  img {
    width: 100px;
    height: 100px;
  }
  h3 {
    color: #2a9cff;
    font-size: 20px;
  }
  p{
    color: #93ccff;
  }
  button{
    border: 1px solid #2a9cff;
    background-color: #9bd0ff;
    border-radius: 5px;
    height: 30px;
    width: 100px;
    cursor: pointer;
    color: #949494;
    font-weight: bold;
  }
`;
