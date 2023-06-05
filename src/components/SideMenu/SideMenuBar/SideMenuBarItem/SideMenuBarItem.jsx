import s from "./side-menu-bar-item.module.scss";

const SideMenuBarItem = ({ barItem, selected, setSelected }) => {
  const className = selected === barItem.id ? s.barItemActive : s.barItem;
  const selectBarItem = (e) => {
    setSelected(e.target.id);
  };

  return (
    <li onClick={selectBarItem} className={className} id={barItem.id}>
      <span style={{ marginRight: "7px" }}>-</span> {barItem.name}
    </li>
  );
};

export default SideMenuBarItem;
