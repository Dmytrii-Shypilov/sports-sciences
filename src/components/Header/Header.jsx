import s from "./header.module.scss";
import { NavLink } from "react-router-dom";

import Container from "../Container";
import { Logo } from "../../images/svg/logo";





const Header = () => {

  const getClassName = ({ isActive }) => {
    return isActive ? s.active : s.link;
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <NavLink to="/" className={s.logo}>
            <Logo />
          </NavLink>
          <nav>
            <ul className={s.linkList}>
              <li className={s.listItem}>
                <NavLink to="/" className={getClassName}>
                  Головна
                </NavLink>
              </li>
              <li className={s.listItem}>
                <NavLink to="/blog" className={getClassName}>
                  Блог
                </NavLink>
              </li>
              <li className={s.listItem}>
                <NavLink to="/gadgets" className={getClassName}>
                  Гаджети
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
