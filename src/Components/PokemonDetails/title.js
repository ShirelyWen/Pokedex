import React from "react";
import "../../Share/color.css";
import classes from "./title.module.css";

export default function Title(props) {
  return (
    <div className={classes.TitleContainer}>
      <span className={classes.Title}>{props.title}</span>
    </div>
  );
}
