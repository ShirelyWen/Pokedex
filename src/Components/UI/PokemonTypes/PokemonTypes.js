import React from "react";
import PropTypes from "prop-types";

const pokemonTypes = props => (
  <div>
    <span>{props.type}</span>
  </div>
);

pokemonTypes.propTypes = {
  name: PropTypes.string.isRequired
};

export default pokemonTypes;
