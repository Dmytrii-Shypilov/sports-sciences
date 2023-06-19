import s from "./side-menu.module.scss";

import { useEffect, useState } from "react";

import SideMenuBar from "./SideMenuBar/SideMenuBar";

const SideMenu = ({setView, menuBars}) => {
  const [selected, setSelected] = useState("1");

  useEffect(()=> {
    setView(selected)
  }, [selected])

  const menuBarsList = menuBars.map((bar) => {
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

  return <ul className={s.menu}>{menuBarsList}</ul>;
};

export default SideMenu;
