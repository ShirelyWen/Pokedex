import React, { useState, useEffect } from "react";
import axios from "../../Share/axios";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import PokemonDescription from "../PokemonDescription/PokemonDescription";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions/actionTypes";

import classes from "./PokemonLists.module.css";
// import PropTypes from "prop-types";
// import pokemonCard from "../../Components/PokemonCard/PokemonCard";

export function PokemonLists(props) {
  const [params, setParams] = useState("");
  useEffect(() => {
    axios
      .get("pokemon/?limit=151")
      .then(res => {
        res.data.results.map((data, index) => {
          return props.onAddedPokemon(index + 1, data.name);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const selectedHandler = id => {
    setParams({ params: id });
  };

  //   console.log(props.pml);

  return (
    <div className={classes.PokoCards}>
      {props.pml.map(pokomon => (
        <div className={classes.PokeContainer}>
          <PokemonCard
            key={pokomon.id}
            className={classes.PokeCard}
            number={pokomon.id}
            name={pokomon.name}
            clicked={() => selectedHandler(pokomon.id)}
          />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    pml: state.pokemonList.pokemonLists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedPokemon: (id, name) =>
      dispatch({
        type: actionTypes.ADD_POKEMON,
        pokemonData: { id: id, name: name }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonLists);
