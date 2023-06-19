import s from "./katch-mcardle-form.module.scss";

import { useState } from "react";
import { KatchMcArdleFormula } from "../../../../helpers/calculations";

import { BackArrow } from "../../../../images/svg/BackArrow";

const KatchMcArdleForm = () => {
  const [form, setForm] = useState({fat: 0, activityLevel: 'sedentary', weight: 0});
  const [result, setResult] = useState(null);

  
  const onChange = (e) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const calculateOnSubmit = (e) => {
    e.preventDefault();
    const { weight, fat, activityLevel } = form;
    const [bmr, total] = KatchMcArdleFormula(weight, fat, activityLevel);
    setResult({
      bmr,
      total,
    });
  };

  const getBack = () => {
    setResult(null);
  };

  return (
    <div>
      {!result && (
        <form
          className={s.form}
          id="katchMcArdleForm"
          onSubmit={calculateOnSubmit}
        >
          <div className={s.fieldBox}>
            <div className={s.field}>
              <label className={s.label} for="weight">
                Вага (в кг):
              </label>
              <input
                className={s.input}
                onChange={onChange}
                value={form.weight}
                type="number"
                id="weight"
                name="weight"
                required
              />
            </div>
            <div className={s.field}>
              <label className={s.label} for="fat">
                Доля жиру в тілі (в %):
              </label>
              <input
              value={form.fat}
                className={s.input}
                onChange={onChange}
                type="number"
                id="fat"
                name="fat"
                required
              />
            </div>
          </div>
          <div className={s.field}>
            <label className={s.label} for="activityLevel">
              Рівень активності:
            </label>
            <select
              className={s.input}
              onChange={onChange}
              id="activityLevel"
              name="activityLevel"
              value={form.activityLevel}
            >
              <option className={s.option} value="sedentary">
                Малорухливий спосіб життя (мало або без фізичних вправ)
              </option>
              <option className={s.option} value="light">
                Злегка активний (легкі вправи/спорт 1-3 дні/тиждень)
              </option>
              <option className={s.option} value="moderate">
                Помірно активний (помірні вправи/спорт 3-5 днів на тиждень)
              </option>
              <option className={s.option} value="high">
                Дуже активний (інтенсивні вправи/спорт 6-7 днів на тиждень){" "}
              </option>
              <option className={s.option} value="extreme">
                Супер активний (дуже важкі вправи/спорт і фізична робота або 2
                тренування)
              </option>
            </select>
          </div>
          <div className={s.btnBox}>
            <button className={s.button} type="submit">
              Розрахувати
            </button>
          </div>
        </form>
      )}
      {result && (
        <div className={s.result}>
          <div className={s.icon} onClick={getBack}>
            <BackArrow width="30" />
          </div>
          <p className={s.paragraph}>
            Основний обмін: <span className={s.figures}>{result.bmr} kcal</span>
          </p>
          <p className={s.paragraph}>
            Добова потреба: 
             <span className={s.figures}>{result.total} kcal</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default KatchMcArdleForm;
