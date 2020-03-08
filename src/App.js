import React from "react";
import "./App.css";
import PokemonLists from "./Container/PokemonLists/PokemonLists";
import EmporaryDrawer from "./Components/UI/Navbar/Navbar";
import BasicTextFields from "./Components/UI/Search/Search";

function App() {
  return (
    <div className="App">
      <EmporaryDrawer />
      <BasicTextFields />
      <PokemonLists />
    </div>
  );
}

export default App;
