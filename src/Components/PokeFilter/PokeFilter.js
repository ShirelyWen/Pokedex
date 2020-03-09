import React, { useState } from "react";
import BasicTextFields from "../UI/Search/Search";
import PokemonCard from "../PokemonCard/PokemonCard";
import { connect } from "react-redux";

export function PokeFilter(props) {
  const [searchValue, setSearchValue] = useState("");
  const [dispayObj, setDisplayObj] = useState({});
  const filterHandler = event => {
    event.preventDefault();
    const value = searchValue;
    props.pml.map(element => {
      for (let key in element) {
        if (
          String(element[key])
            .toLowerCase()
            .includes(value.toLowerCase())
        ) {
          const updatedObj = element;
          setDisplayObj({ dispayObj: { ...dispayObj, updatedObj } });
        }
      }
    });
  };
  return (
    <div>
      <form onSubmit={filterHandler}>
        <BasicTextFields
          changed={event => setSearchValue(event.target.value)}
        />
      </form>

      {/* <PokemonCard name={dispayObj.name} number={setDisplayObj.id} /> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    pml: state.pokemonList.pokemonLists
  };
};

export default connect(mapStateToProps)(PokeFilter);
