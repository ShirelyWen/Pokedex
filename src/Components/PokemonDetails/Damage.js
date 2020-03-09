import React from "react";
import Title from "./title";
import classes from "./Damage.module.css";
import "../../Share/color.css";

const divStyle = {
  width: "100px",
  padding: "10px",
  marginRight: "10px",
  marginBottom: "10px"
};

export default function Damage(props) {
  const title = "Damage When Attached";

  return (
    <div className={classes.DamageContainer}>
      <div className={props.type}>
        <Title title={title} />
      </div>
      <div className={classes.ContentContainer}>
        <div className={classes.DoubleContainer}>
          {props.double.map(p => {
            return (
              <div className={classes.LeftItmes}>
                <div className={p} style={divStyle}>
                  <span>{p}</span>
                </div>
                <div style={divStyle}>
                  <span>2x</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={classes.HalfContainer}>
          {props.half.map(p => {
            return (
              <div className={classes.RightItems}>
                <div className={p} style={divStyle}>
                  <span>{p}</span>
                </div>
                <div style={divStyle}>
                  <span>0.5x</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
