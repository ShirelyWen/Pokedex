import * as actionTypes from "../actions/actionTypes";
// import { updateObject } from "../../Share/utility";

const initialState = {
  id: "",
  damageDoubel: [],
  damageHalf: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DAMAGE:
      return {
        ...state,
        id: action.id,
        damageDoubel: action.damageDoubel,
        damageHalf: action.damageHalf
      };
    default:
      return state;
  }
};
export default reducer;
