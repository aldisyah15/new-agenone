import React from "react";

export const Close_Menu = (props) => {
  return (
    <img
    src="close.png"
    alt="Menu"
    className={`${props.ClassName}`}
    onClick={props.OnClick}
  />
  );
};

