import * as actionTypes from "../actions/actionTypes";

const initialState = {
  pokemonLists: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POKEMON:
      const newPokemon = {
        id: action.pokemonData.id,
        name: action.pokemonData.name
      };
      return {
        ...state,
        pokemonLists: state.pokemonLists.concat(newPokemon)
      };
    default:
      return state;
  }
};

export default reducer;
