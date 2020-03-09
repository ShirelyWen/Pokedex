import React from "react";
import "./App.css";
import PokemonLists from "./Container/PokemonLists/PokemonLists";
import EmporaryDrawer from "./Components/UI/Navbar/Navbar";
// import BasicTextFields from "./Components/UI/Search/Search";
import PokeFilter from "./Components/PokeFilter/PokeFilter";
import PokemonDescription from "./Container/PokemonDescription/PokemonDescription";

function App() {
  return (
    <div className="App">
      <EmporaryDrawer />
      <PokeFilter />
      <PokemonLists />
      {/* <PokemonDescription /> */}
    </div>
  );
}

export default App;
