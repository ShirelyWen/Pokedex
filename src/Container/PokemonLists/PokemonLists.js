import React, { useState, useEffect } from "react";
import axios from "../../Share/axios";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import PokemonDescription from "../PokemonDescription/PokemonDescription";
// import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";
import Modal from "react-modal";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions/actionTypes";

import classes from "./PokemonLists.module.css";
// import PropTypes from "prop-types";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "100%",
    height: "100%"
  }
};

export function PokemonLists(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    Modal.setAppElement("body");
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const selectedHandler = id => {
    props.getPokemonDetail(id);
    props.getPokemonBasicInfo(id);
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
            clicked={() => {
              selectedHandler(pokomon.id);
              openModal();
            }}
          />
        </div>
      ))}
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <button onClick={closeModal} className={classes.buttonStyle}>
          BACK
        </button>
        <PokemonDescription />
      </Modal>
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
      }),
    getPokemonDetail: id => {
      dispatch(actionTypes.ADD_POKEMONDETAIL(id));
    },
    getPokemonBasicInfo: id => {
      dispatch(actionTypes.initBasicInfo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonLists);
