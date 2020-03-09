import React from "react";
import classes from "./OverView.module.css";

export default function OverView(props) {
  return (
    <div className={classes.Container}>
      <div className={classes.ImgContainer}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
          alt={props.name}
        />
      </div>
      <div className={classes.DetailsContainer}>
        <div className={classes.TypeConatiner}>
          <div className={classes.TypeStyle}>
            {props.types.map((type, index) => {
              let classes = ["TypeDiv", type].join(" ");
              return (
                <div key={index + 20} className={classes}>
                  <span className={classes.TestStyle}>{type}</span>
                </div>
              );
            })}
          </div>
          <div>
            <span className={classes.Number}>#{props.id}</span>
          </div>
        </div>
        <div className={classes.StatContainer}>
          <div className={classes.StatName}>
            {props.status.map((status, index) => {
              return (
                <span key={index + 30} className={classes.TestStyle}>
                  {status[0]}
                </span>
              );
            })}
          </div>
          <div className={classes.StatValue}>
            {props.status.map((status, index) => {
              return <span key={index + 40}>{status[1]}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
