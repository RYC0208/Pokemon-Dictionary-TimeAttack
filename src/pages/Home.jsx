import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Home = () => {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate("/dex");
  }
  return (
    <StContainer>
      <div className="pokemonTitle">Pokemon</div>
      <button onClick={goToDex}>포켓몬 도감 시작하기</button>
    </StContainer>
  );
};

export default Home;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 800px;
  
  .pokemonTitle{
    font-size: 80px;
    font-weight: bold;
    color: #9bd0ff;
  }
  button{
    border: none;
    border-radius: 15px;
    height: 40px;
    background-color: #e4f3ff;
    color: #949494;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
  }
`