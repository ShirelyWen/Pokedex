// import * as actionTypes from "./actionTypes";
// import axios from "../../Share/axios";

// export const setDamageInfo = info => {
//   const newTypes = [];
//   info.types.map(type => newTypes.push(type.type.name));
//   const newStatus = [];
//   info.stats.map(stat => newStatus.push([stat.stat.name, stat.base_stat]));
//   const newAbilities = [];
//   info.abilities.map(ability => newAbilities.push(ability.ability.name));
//   return {
//     type: actionTypes.ADD_DAMAGE,
//     id: info.id,
//     damageDouble: info.name,
//     damageHalf: newTypes
//   };
// };

// export const initDamageInfo = () => {
//   return dispatch => {
//     axios
//       .get("type/grass/")
//       .then(response => {
//         dispatch(setDamageInfo(response.data));
//       })
//       .catch(error => {});
//   };
// };
