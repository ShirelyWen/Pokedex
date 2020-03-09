import React from "react";
// import PokemonTypes from "../UI/PokemonTypes/PokemonTypes";

import classes from "./PokemonCard.module.css";

const pokemonCard = props => {
  // console.log(props);
  return (
    <div className={classes.PokoCard} onClick={props.clicked}>
      <div className={classes.ImageContainer}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.number}.png`}
          alt={props.name}
        />
      </div>
      <div className={classes.NameContainer}>
        <span className={classes.PokoName}>{props.name}</span>
      </div>
    </div>
  );
};

export default pokemonCard;
