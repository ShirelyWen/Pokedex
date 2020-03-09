import * as actionTypes from "../actions/actionTypes";

const initialState = {
  id: "",
  captureRate: "",
  genderRate: "",
  eggGroups: [],
  hatchCounter: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SPECIES:
      return {
        ...state,
        id: action.id,
        captureRate: action.captureRate,
        genderRate: action.genderRate,
        eggGroups: action.eggGroups,
        hatchCounter: action.hatchCounter
      };
    default:
      return state;
  }
};

export default reducer;
