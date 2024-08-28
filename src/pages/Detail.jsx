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
      <p> {pokemon.korean_name}</p>
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
`;
