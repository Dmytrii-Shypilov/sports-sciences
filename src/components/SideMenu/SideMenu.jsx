import s from "./side-menu.module.scss";

import { gadjetsMenuBars } from "../../helpers/menuBars";

import SideMenuBar from "./SideMenuBar/SideMenuBar";

const SideMenu = () => {
  const menuBars = gadjetsMenuBars.map((bar) => {
    const { name, barItems } = bar;
    return <SideMenuBar name={name} barItems={barItems} />;
  });

  return <ul className={s.menu}>
    {menuBars}
  </ul>;
};

export default SideMenu;
