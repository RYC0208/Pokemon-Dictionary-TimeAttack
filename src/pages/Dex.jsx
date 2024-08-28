import React from "react";
import DashBoard from "./../components/DashBoard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const Dex = () => {
  return (
    <StContainer>
      <DashBoard />
      <PokemonList />
    </StContainer>
  );
};

export default Dex;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  gap: 20px;
`