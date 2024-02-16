import React from "react";

export const Logo = (props) => {
  return (
    <div>
      <a href="#" className={`${props.ClassName}`}>
        <img src="Logo.png" alt="" className="h-10"/>
      </a>
    </div>
  );
};
