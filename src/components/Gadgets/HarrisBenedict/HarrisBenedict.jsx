import s from "./harris-benedict.module.scss";

import { useState } from "react";

import BookmarkSwitcher from "../../BookmarkSwitcher";
import HarrisBenedictForm from "./HarrisBenedictForm";

const HarrisBenedict = () => {
  const [section, setSection] = useState("Опис");
  return (
    <section className={s.section}>
      <BookmarkSwitcher
        bookmarks={["Опис", "Розрахунок"]}
        setSection={setSection}
      />
      <div className={s.wrapper}>
        {section === "Опис" && (
          <div className={s.descrSection}>
            <p>
              Якщо людина стурбована своїм здоров'ям і хоче підтримувати себе в
              певній формі, формула Харріса-Бенедикта або ж Миффлин Сан-Жеора
              стане для нього хорошим помічником. Адже коли знаєш свій основний
              обмін, можна вирішити, скільки калорій варто споживати. Якщо ваша
              вага вас влаштовує, але ви не хочете набрати кілограми, просто не
              споживайте зайву енергію. Якщо ж ви хочете схуднути, то просто
              створіть дефіцит в нормі калорій, і ваш організм почне
              відшкодовувати його з внутрішніх запасів.
            </p>
          </div>
        )}
        {section === "Розрахунок" && (
          <div className={s.calcSection}>
            <HarrisBenedictForm />
          </div>
        )}
      </div>
    </section>
  );
};

export default HarrisBenedict;
