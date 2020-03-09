import React from "react";
import classes from "./header.module.css";
import "../../Share/color.css";

export default function Header(props) {
  // var divClass = "Header ";
  // divClass += props.type;
  // console.log(divClass);
  return (
    <div className={props.type}>
      <div className={classes.Header}>
        <h1 className={classes.PokeName}>{props.name}</h1>
      </div>
    </div>
  );
}
