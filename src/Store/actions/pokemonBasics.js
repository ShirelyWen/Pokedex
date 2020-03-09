import * as actionTypes from "./actionTypes";
import axios from "../../Share/axios";

export const setBasicInfo = info => {
  const newTypes = [];
  info.types.map(type => newTypes.push(type.type.name));
  const newStatus = [];
  info.stats.map(stat => newStatus.push([stat.stat.name, stat.base_stat]));
  const newAbilities = [];
  info.abilities.map(ability => newAbilities.push(ability.ability.name));
  return {
    type: actionTypes.ADD_BASCIS,
    id: info.id,
    name: info.name,
    types: newTypes,
    status: newStatus,
    height: info.height,
    weight: info.weight,
    abilities: newAbilities
  };
};

export const initBasicInfo = () => {
  return dispatch => {
    axios
      .get("pokemon/1/")
      .then(response => {
        dispatch(setBasicInfo(response.data));
      })
      .catch(error => {});
  };
};
