import s from "./gadgets-page.module.scss";


import Container from "../../components/Container/Container";
import HarrisBenedict from "../../components/Gadgets/HarrisBenedict";
import SideMenu from "../../components/SideMenu";

const GadgetsPage = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <SideMenu />
          <div className={s.gadgetBox}>
              <HarrisBenedict/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GadgetsPage;
