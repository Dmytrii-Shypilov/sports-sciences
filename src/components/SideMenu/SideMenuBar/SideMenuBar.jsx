import s from "./side-menu-bar.module.scss";

import { useState, useEffect } from "react";

import ArrowIcon from "../../../images/svg/ArrowIcon";
import SideMenuBarItem from "./SideMenuBarItem/SideMenuBarItem";

const SideMenuBar = ({ name, barItems, selected, setSelected }) => {
  const [isDropped, setIsDropped] = useState(false);

  useEffect(()=> {
    if (barItems[0].id === "1") {
      setIsDropped(true)
    }
  }, [])

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
