import s from "./side-menu-bar-item.module.scss"


const SideMenuBarItem = ({barItem}) => {
    return (
        <li id={barItem.id}>
            {barItem.name}
        </li>
    )
}

export default SideMenuBarItem