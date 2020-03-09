import * as actionTypes from "../actions/actionTypes";

const initialState = {
  filterLists: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FILTER:
      const newPokemon = {
        id: action.pokemonData.id,
        name: action.pokemonData.name
      };
      return {
        ...state,
        filterLists: state.filterLists.concat(newPokemon)
      };
    case actionTypes.DELETE_FILTER:
      return {
        filterLists: []
      };
    default:
      return state;
  }
};

export default reducer;
