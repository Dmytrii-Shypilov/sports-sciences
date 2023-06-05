import s from "./side-menu.module.scss";

import { gadjetsMenuBars } from "../../helpers/menuBars";
import { useState } from "react";

import SideMenuBar from "./SideMenuBar/SideMenuBar";

const SideMenu = () => {
  const [selected, setSelected] = useState(null);

  const menuBars = gadjetsMenuBars.map((bar) => {
    const { name, barItems } = bar;
    return (
      <SideMenuBar
        name={name}
        barItems={barItems}
        selected={selected}
        setSelected={setSelected}
      />
    );
  });

  return <ul className={s.menu}>{menuBars}</ul>;
};

export default SideMenu;
