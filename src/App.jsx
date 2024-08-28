import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";
import { PokemonProvider } from "./contexts/PokemonContext";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<Dex />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </PokemonProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
