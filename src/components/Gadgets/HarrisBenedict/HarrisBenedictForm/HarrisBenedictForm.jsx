import s from "./harris-benedict-form.module.scss";

import { useState } from "react";
import { HarrisBenedictFormula } from "../../../../helpers/calculations";

import { BackArrow } from "../../../../images/svg/BackArrow";

const HarrisBenedictForm = () => {
  const [form, setForm] = useState({gender: "male", weight: 0, height: 0, age: 0, activityLevel: "sedentary"});
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
    const { gender, age, weight, height, activityLevel } = form;
    const [bmr, total] = HarrisBenedictFormula(
      gender,
      age,
      weight,
      height,
      activityLevel
    );
    setResult({
      bmr,
      total,
    });
  };

  const getBack =()=> {
    setResult(null)
  }

  return (
    <div>
      {!result && (
        <form
          className={s.form}
          id="harrisBenedictForm"
          onSubmit={calculateOnSubmit}
        >
          <div className={s.fieldBox}>
            <div className={s.field}>
              <label className={s.label} for="gender">
                Стать:
              </label>
              <select
                className={s.input}
                onChange={onChange}
                id="gender"
                name="gender"
                value={form.gender}
              >
                <option className={s.option} value="male">
                  Чоловіча
                </option>
                <option className={s.option} value="female">
                  Жіноча
                </option>
              </select>
            </div>

            <div className={s.field}>
              <label className={s.label} for="age">
                Вік:
              </label>
              <input
                className={s.input}
                onChange={onChange}
                type="number"
                id="age"
                name="age"
                required
                value={form.age}
              />
            </div>
          </div>
          <div className={s.fieldBox}>
            <div className={s.field}>
              <label className={s.label} for="weight">
                Вага (в кг):
              </label>
              <input
                className={s.input}
                onChange={onChange}
                type="number"
                id="weight"
                name="weight"
                value={form.weight}
                required
              />
            </div>
            <div className={s.field}>
              <label className={s.label} for="height">
                Зріст (в см):
              </label>
              <input
                className={s.input}
                onChange={onChange}
                type="number"
                id="height"
                name="height"
                value={form.height}
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
                <BackArrow width="30"/>
            </div>
          <p className={s.paragraph}>
            Основний обмін: <span className={s.figures}>{result.bmr} kcal</span>
          </p>
          <p className={s.paragraph}>
            Добова потреба:{" "}
            <span className={s.figures}>{result.total} kcal</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default HarrisBenedictForm;
