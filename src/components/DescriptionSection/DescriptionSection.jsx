import s from "./description-section.module.scss";

import Container from "../Container";
import { ArticleIcon } from "../../images/svg/ArticleIcon";
import { DumbellIcon } from "../../images/svg/DumbellIcon";
import { FoodIcon } from "../../images/svg/FoodIcon";
import articleImg from "../../images/artcle-icon2.webp";
import dumbellImg from "../../images/dumbell-fit2.webp";
import healthImg from "../../images/fitness-food2.webp";

const DescriptionSection = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h2 className={s.title}>Description block</h2>
          <p className={s.descrText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum quis veritatis laborum ipsam corrupti incidunt porro aliquam
            tenetur, quibusdam eius sunt dolorem consequuntur eligendi velit
            quidem soluta nam doloribus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum quis veritatis laborum ipsam corrupti incidunt porro aliquam
            tenetur, quibusdam eius sunt dolorem consequuntur eligendi velit
            quidem soluta nam doloribus.
          </p>
          <ul className={s.list}>
            <li className={s.listItem}>
              <div className={s.imageThumb}>
                <ArticleIcon/>
              </div>

              <p className={s.iconText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur est maiores quos, harum cumque odit quia repellendus
                ducimus maxime placeat voluptatem pariatur ea, illum inventore.
                Fugit soluta praesentium ipsum alias.
              </p>
            </li>
            <li className={s.listItem}>
              <div className={s.imageThumb}>
                <DumbellIcon/>
              </div>
              <p className={s.iconText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur est maiores quos, harum cumque odit quia repellendus
                ducimus maxime placeat voluptatem pariatur ea, illum inventore.
                Fugit soluta praesentium ipsum alias.
              </p>
            </li>
            <li className={s.listItem}>
              <div className={s.imageThumb}>
                <FoodIcon/>
              </div>
              <p className={s.iconText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur est maiores quos, harum cumque odit quia repellendus
                ducimus maxime placeat voluptatem pariatur ea, illum inventore.
                Fugit soluta praesentium ipsum alias.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default DescriptionSection;
