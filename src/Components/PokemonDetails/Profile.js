import React from "react";
import Title from "./title";
import "../../Share/color.css";
import classes from "./profile.module.css";

export default function Profile(props) {
  const title = "Profile";
  return (
    <div className={classes.ProfileContainer}>
      <div className={props.type}>
        <Title title={title} />
      </div>
      <div className={classes.ContentContainer}>
        <div className={classes.LeftContainer}>
          <div className={classes.LeftName}>
            <span>Height: </span>
            <span>Catch Rate: </span>
            <span>Egg Groups: </span>
            <span>Abilities: </span>
          </div>
          <div className={classes.LeftValue}>
            <span> {props.height}</span>
            <span> {props.captureRate}</span>
            <span> {props.eggGroups.map(p => p + ",")}</span>
            <span> {props.abilities.map(p => p + ",")}</span>
          </div>
        </div>
        <div className={classes.RightContainer}>
          <div className={classes.LeftName}>
            <span>Weight: </span>
            <span>Gender Ratio: </span>
            <span>Hatch Steps: </span>
            <span>EVs: </span>
          </div>
          <div className={classes.LeftValue}>
            <span>{props.weight}</span>
            <span> {props.genderRate}</span>
            <span>{props.hatchCounter}</span>
            <span> </span>
          </div>
        </div>
      </div>
    </div>
  );
}
