import s from "./article-page.module.scss";

import { articles } from "../../db/aricles";

import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const { id } = useParams();
  console.log(id)
  const [article] = articles.filter((art) => art.id === id);
  const { title, image, highlightText, mainText } = article;

  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.highlight}>{highlightText}</p>
        <div className={s.thumb}>
          <img width="800" src={image[1]} alt="" />
        </div>
        <p className={s.text}>{mainText}</p>
        <div className={s.summary}>
          <p>Резюме:</p>
          <p className={s.summaryText}>Інформація що повинна тут бути наразі відсутня</p>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
