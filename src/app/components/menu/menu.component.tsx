import React, { Dispatch, createContext, useContext, useState } from "react";
import "./menu.style.scss";
import { useMenuLinks } from "../../hooks/useData";
import whiteLogo from "../../../assets/img/white_logo.png";
import { NavLink } from "react-router-dom";

import hamburgerLines from "../../../assets/img/hamburger/hamburger_lines.svg";
import xMark from "../../../assets/img/hamburger/xmark.svg";

const MenuContext = createContext({
  links: [
    {
      section: "",
      url: "",
    },
  ],
});

const Hamburger: React.FC<{
  on: Boolean;
  setOn: Dispatch<boolean>;
}> = ({ on, setOn }) => {
  return (
    <div className="hamburger-lines" onClick={() => setOn(!on)}>
      <img
        className={on ? "xmark" : "lines"}
        src={on ? xMark : hamburgerLines}
      />
    </div>
  );
};

const MenuLinks = () => {
  const { links } = useContext(MenuContext);

  return (
    <div className="MenuLinks">
      <nav>
        <ul className="menu-items">
          {links.map(({ section, url }) => {
            let className = "MenuLinks__link";
            if (section === "CM Agency")
              className += " MenuLinks__link--cmagencylink";

            return (
              <li key={section}>
                <NavLink to={url} className={className} replace>
                  {section}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <img src={whiteLogo} alt="" className="menu-logo" />
    </div>
  );
};

export const Menu = () => {
  const [on, setOn] = useState(false);
  const links = useMenuLinks();

  return (
    <MenuContext.Provider value={{ links }}>
      <div className="Menu">
        <div className={on ? "Menu--wrapper active" : "Menu--wrapper"}>
          <Hamburger on={on} setOn={setOn} />
          <MenuLinks />
        </div>
      </div>
    </MenuContext.Provider>
  );
};
