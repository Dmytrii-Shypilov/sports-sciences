import s from "./side-menu-bar.module.scss";

import { useState } from "react";

import ArrowIcon from "../../../images/svg/ArrowIcon";
import SideMenuBarItem from "./SideMenuBarItem/SideMenuBarItem";

const SideMenuBar = ({ name, barItems, selected, setSelected }) => {
  const [isDropped, setIsDropped] = useState(false);

  const menuBarItems = barItems.map((item) => {
    return (
      <SideMenuBarItem
        barItem={item}
        selected={selected}
        setSelected={setSelected}
      />
    );
  });

  const toggleBar = () => {
    setIsDropped(!isDropped);
    if (isDropped) {
      // setSelected(null)
    }
  };

  return (
    <li className={s.menuSection}>
      <div className={s.bar} onClick={toggleBar}>
        <span className={s.name}>{name}</span>
        <ArrowIcon isDropped={isDropped} />
      </div>
      {isDropped && <ul className={s.itemsList}>{menuBarItems}</ul>}
    </li>
  );
};

export default SideMenuBar;
