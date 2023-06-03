import s from "./article.module.scss";

import { memo } from "react";
import { convertNameToPath } from "../../../helpers/nameConverter";

import { NavLink } from "react-router-dom";

const Article = ({ article }) => {
  const {id, title, image, highlightText } = article
  const path = `article/${id}`

  return (
    <li className={s.article}> 
        <div className={s.thumb}>
          <img width="200" src={image[0]} alt="" />
        </div>
        <div>
          <h3 className={s.title}>
            {title}
          </h3>
          <p className={s.text}>
            {highlightText}
          </p>
          <NavLink className={s.link} to={path}>Читати</NavLink>
        </div>
    </li>
  );
};

export default memo(Article);
