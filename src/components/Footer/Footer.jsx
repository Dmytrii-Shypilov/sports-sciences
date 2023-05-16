import s from "./footer.module.scss";

import Container from "../Container/Container";
import { Logo } from "../../images/svg/logo";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <Logo elCol="#ffffff" backCol="#10162c" />
      </Container>
    </footer>
  );
};

export default Footer;
