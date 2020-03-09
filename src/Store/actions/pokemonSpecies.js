import * as actionTypes from "./actionTypes";
import axios from "../../Share/axios";

export const setSpeciesInfo = info => {
  const newEggGroups = [];
  info.egg_groups.map(eggGroup => newEggGroups.push(eggGroup.name));
  return {
    type: actionTypes.ADD_SPECIES,
    id: info.id,
    captureRate: info.capture_rate,
    genderRate: info.gender_rate,
    eggGroups: newEggGroups,
    hatchCounter: info.hatch_counter
  };
};

export const initSpeciesInfo = () => {
  return dispatch => {
    axios
      .get("pokemon-species/")
      .then(response => {
        console.log(response.data);
        dispatch(setSpeciesInfo(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const ADD_POKEMONDETAIL = id => {
  // console.log("afdsfads");
  // console.log(id);
  return dispatch => {
    axios
      .get(`pokemon-species/${id}/`)
      .then(response => {
        // console.log(response.data);
        dispatch(setSpeciesInfo(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
