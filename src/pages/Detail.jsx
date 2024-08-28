import React from "react";
import MOCK_DATA from "../Mock";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const pokemonId = Number(searchParams.get("id"));
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);
  console.log("poke=>", pokemon);

  const goBack = () => {
    navigate("/dex");
  };
  return (
    <StContainer>
      <img src={pokemon.img_url} alt="" />
      <p>No. {pokemon.id}</p>
      <h3> {pokemon.korean_name}</h3>
      <p>{pokemon.description}</p>
      <button onClick={goBack} >뒤로가기</button>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 900px;
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
    height: 40px;
    width: 150px;
    cursor: pointer;
    color: #949494;
    font-weight: bold;
  }
`;
