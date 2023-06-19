import s from "./katch-mcardle.module.scss";

import { useState } from "react";

import BookmarkSwitcher from "../../BookmarkSwitcher/BookmarkSwitcher";
import KatchMcArdleForm from "./KatchMcArdleForm/KatchMcArdleForm";

const KatchMcArdle = () => {
  const [section, setSection] = useState("Опис");
  return (
    <section>
      <BookmarkSwitcher
        bookmarks={["Опис", "Розрахунок"]}
        setSection={setSection}
      />
      <div className={s.wrapper}>
        {section === "Опис" && (
          <div className={s.descrSection}>
            <p>
              Формула Кетча-МакАрдла є одним з методів для розрахунку потреби в
              енергії (в кілокалоріях) для осіб з ураженнями м'язово-скелетної
              системи, зокрема з особливостями функціонування скелетних м'язів.
              Ця формула дозволяє врахувати відмінності в м'язовій масі та
              можливість збільшення потужності м'язів внаслідок тренування.
            </p>
          </div>
        )}
        {section === "Розрахунок" && (
          <div className={s.calcSection}>
            <KatchMcArdleForm />
          </div>
        )}
      </div>
    </section>
  );
};

export default KatchMcArdle;
