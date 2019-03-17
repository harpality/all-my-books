import React, { Component } from "react";

const Button = props => {
  if (props.children === "Save") {
    return (
      <a className="waves-effect waves-light btn" onClick={props.onClick}>
        {props.children}
      </a>
    );
  } else {
    return (
      <a
        className="waves-effect waves-light btn"
        onClick={() => props.onClick(props.id)}
      >
        {props.children}
      </a>
    );
  }
};

export default Button;
