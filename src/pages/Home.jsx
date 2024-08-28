import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate("/dex");
  }
  return (
    <div>
      홈이에유
      <button onClick={goToDex}>포켓몬 도감 시작하기</button>
    </div>
  );
};

export default Home;
