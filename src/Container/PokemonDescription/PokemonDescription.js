import React, { useEffect } from "react";

import OverView from "../../Components/PokemonDetails/OverView";
import Profile from "../../Components/PokemonDetails/Profile";
// import Damage from "../../Components/PokemonDetails/Damage";
import Header from "../../Components/PokemonDetails/header";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions/actionTypes";
import classes from "./PokemonDescription.module.css";
import "../../Share/color.css";

export function PokemonDescription(props) {
  useEffect(() => {
    props.onInitBasicInfo();
    props.onInitSpeciesInfo();
    // props.onInitDamagesInfo();
  });
  // useEffect(() => {
  //   props.onInitSpeciesInfo();
  // });
  // console.log(props.pba);
  return (
    <div className={classes.DetailsContainer}>
      <Header name={props.pbn} type={props.pbt[0]} />
      <OverView
        id={props.pbi}
        name={props.pbn}
        types={props.pbt}
        status={props.pbs}
      />

      <Profile
        type={props.pbt[0]}
        height={props.pbh}
        weight={props.pbw}
        captureRate={props.psc}
        eggGroups={props.pse}
        abilities={props.pba}
        genderRate={props.psg}
        hatchCounter={props.psh}
      />

      {/* <Damage double={props.pddd} half={props.pddh} /> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    pml: state.pokemonList.pokemonLists,
    pbi: state.basics.id,
    pbn: state.basics.name,
    pbt: state.basics.types,
    pbs: state.basics.status,
    pbh: state.basics.height,
    pbw: state.basics.weight,
    pba: state.basics.abilities,
    pdi: state.damage.id,
    // pddd: state.damage.damageDouble,
    // pddh: state.damage.damageHalf,
    psi: state.species.id,
    psc: state.species.captureRate,
    psg: state.species.genderRate,
    pse: state.species.eggGroups,
    psh: state.species.hatchCounter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitBasicInfo: () => dispatch(actionTypes.initBasicInfo()),
    onInitSpeciesInfo: () => dispatch(actionTypes.initSpeciesInfo())
    // onInitDamagesInfo: () => dispatch(actionTypes.initDamagesInfo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDescription);
