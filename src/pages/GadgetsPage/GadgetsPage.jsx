import s from "./gadgets-page.module.scss";

import { useState } from "react";

import { gadgetsMenu } from "../../helpers/gadgetsMenu";

import Container from "../../components/Container/Container";
import HarrisBenedict from "../../components/Gadgets/HarrisBenedict";
import KatchMcArdle from "../../components/Gadgets/KatchMcArdle";
import SideMenu from "../../components/SideMenu";

const GadgetsPage = () => {
  const [view, setView] = useState("1");
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <SideMenu setView={setView} menuBars={gadgetsMenu} />
          <div className={s.gadgetBox}>
            {view === "1" && <HarrisBenedict />}
            {view === "2" && <KatchMcArdle/>}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GadgetsPage;
