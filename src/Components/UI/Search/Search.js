import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  searchInput: {
    "& > *": {
      width: "98%",
      marginTop: 100,
      marginLeft: 15
    }
  }
});

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.searchInput} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Search for Pokémon"
        onChange={props.changed}
      />
    </form>
  );
}
