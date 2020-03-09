import * as actionTypes from "../actions/actionTypes";
// import { updateObject } from "../../Share/utility";

const initialState = {
  damageDouble: [],
  damageHalf: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DAMAGE:
      return {
        ...state,
        damageDouble: action.damageDouble,
        damageHalf: action.damageHalf
      };
    default:
      return state;
  }
};
export default reducer;
