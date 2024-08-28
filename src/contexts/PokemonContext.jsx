import React, { useState } from "react";
import { createContext, useContext } from "react";
const PokemonContext = createContext();
import { useNavigate } from "react-router-dom";

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const navigate = useNavigate();

  const goToDetail = (pokemonId) => {
    navigate(`/detail?id=${pokemonId}`);
  };

  const addPokemon = (pokemon) => {
    const isDupliCate = selectedPokemon.find((p) => p.id === pokemon.id);
    if (isDupliCate) {
      return alert("이미 선택된 포켓몬입니다.");
    } else if (selectedPokemon.length < 6) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    } else {
      return alert("최대 6마리의 포켓몬을 선택할 수 있습니다.");
    }
  };

  const deletePokemon = (pokemonId) => {
    setSelectedPokemon((pokemon) => pokemon.filter((p) => p.id !== pokemonId));
  };

  return (
    <PokemonContext.Provider value={{goToDetail, deletePokemon, addPokemon, selectedPokemon}}>{children}</PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
