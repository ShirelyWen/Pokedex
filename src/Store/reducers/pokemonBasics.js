import * as actionTypes from "../actions/actionTypes";
// import { updateObject } from "../../Share/utility";

const initialState = {
  id: "",
  name: "",
  types: [],
  status: [],
  height: "",
  weight: "",
  abilities: []
};

// const initialState = {
//   basicInfo: []
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BASCIS:
      return {
        ...state,
        id: action.id,
        name: action.name,
        types: action.types,
        status: action.status,
        height: action.height,
        weight: action.weight,
        abilities: action.abilities
      };
    default:
      return state;
  }
};

export default reducer;
