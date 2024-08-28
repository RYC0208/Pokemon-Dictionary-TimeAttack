import React from 'react'
import MOCK_DATA from '../Mock'
import PokemonCard from './PokemonCard'
import styled from 'styled-components';
const PokemonList = () => {
  return (
    <StContainer>
        {MOCK_DATA.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={false} />
        ))}
    </StContainer>
  )
}

export default PokemonList

const StContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
`