import React from "react";
import Title from "./title";

export default function Damage(props) {
  const title = "Damage When Attached";
  return (
    <div>
      <div>
        <Title title={title} />
      </div>
      <div>
        {props.double.map(p => {
          return (
            <div>
              <span>{p}</span>
              <span>2x</span>
            </div>
          );
        })}
      </div>
      <div>
        {props.double.map(p => {
          return (
            <div>
              <span>{p}</span>
              <span>0.5x</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
