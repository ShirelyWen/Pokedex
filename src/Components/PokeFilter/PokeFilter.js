import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions/actionTypes";

export function PokeFilter() {
  return <div></div>;
}

const mapStateToProps = state => {
  return {
    pml: state.pokemonList.pokemonLists,
    pmf: state.filter.filterLists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedPokemon: (id, name) =>
      dispatch({
        type: actionTypes.ADD_FILTER,
        pokemonData: { id: id, name: name }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeFilter);
