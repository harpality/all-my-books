import React from "react";

const Button = props => {
  if (props.children === "Save") {
    return (
      <button className="waves-effect waves-red btn" onClick={props.onClick}>
        {props.children}
      </button>
    );
  } else {
    return (
      <button
        className="waves-effect waves-red btn"
        onClick={() => props.onClick(props.id)}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
