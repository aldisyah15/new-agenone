import React from "react";

export const Li = (props) => {
  return (
    <li className=" font-Interr text-[#262626] text-lg font-semibold list-none mb-10 lg:mb-0  group lg:mr-5">
      <a href="#">{props.children}</a>
      <div className=" opacity-0 w-7 h-0.5 bg-yellow-400 mx-auto group-hover:opacity-100 hidden"></div>
    </li>
  );
};
