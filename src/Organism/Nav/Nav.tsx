import React, { useState } from "react";
import { Li } from "../../atom/Li/Li";
import { Logo } from "../../atom/Logo/Logo";
import { Button } from "../../atom/Button/button.tsx";
import { Close_Menu } from "../../atom/Menu/Close_Menu.tsx";
import { Open_Menu } from "../../atom/Menu/Open_Menu.tsx";

export const Navigasi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <div className="w-[450px] h-[80px] flex items-center relative md:w-[780px]">
        <Close_Menu
          ClassName={`w-[45px] h-[45px] cursor-pointer relative left-2 top-2 active:rotate-180 duration-500 lg:hidden ${
            isOpen ? "block" : "hidden"
          } p-1`}
          OnClick={toggleMenu}
        />

        <Open_Menu
          ClassName={`w-[45px] h-[45px] cursor-pointer relative active:rotate-90 duration-700 lg:hidden ${
            isOpen ? "hidden" : "block"
          }`}
          OnClick={toggleMenu}
        />

        
      </div>

      <nav
        className={`flex flex-col items-center overflow-hidden min-w-80 h-0 absolute top-[80px] lg:w-full lg:flex lg:justify-around lg:flex-row-reverse lg:h-auto lg:top-[10px] ${
          isOpen ? "h-[401px]" : ""
        } duration-500`}
      >
         <Button children="Get Started" ClassName="mb-10 lg:mb-0" />
        <ul className={`flex ${props.ClassName} flex flex-col items-center lg:flex lg:flex-row`}>
          <Li children="Home" />
          <Li children="Service" />
          <Li children="About" />
          <Li children="Blog" />
          <Li children="Contact" />
        </ul>
        <Logo ClassName="" />
      </nav>
    </section>
  );
};
