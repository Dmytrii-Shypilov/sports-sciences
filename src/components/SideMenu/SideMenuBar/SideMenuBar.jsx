import s from './side-menu-bar.module.scss'

import SideMenuBarItem from './SideMenuBarItem/SideMenuBarItem'

const SideMenuBar = ({name, barItems}) => {
    const menuBarItems =  barItems.map((item)=> {
        return <SideMenuBarItem barItem={item} />
    })

    return (
        <li>
            <div>{name}</div>
            <ul>
                {menuBarItems}
            </ul>
        </li>
    )
}

export default SideMenuBar