import React from "react";
import EmporaryDrawer from "../Components/UI/Navbar/Navbar";
import PokemonLists from "./PokemonLists/PokemonLists";
import BasicTextFields from "../Components/UI/Search/Search";

export default function Home() {
  return (
    <div>
      <EmporaryDrawer />
      <BasicTextFields />
      <PokemonLists />
    </div>
  );
}
