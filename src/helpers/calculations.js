const activityFactor = {
  sedentary: 1.2,
  light: 1.375 /*exercising 1-3 days per week */,
  moderate: 1.55 /*exercising 3-5 days per week*/,
  high: 1.725 /*6-7 days per week*/,
  extreme: 1.9 /*physical job, training twice a day*/,
};

export const HarrisBenedictFormula = (
  gender,
  age,
  weight,
  height,
  activityLevel
) => {
  let bmr = 0;
  if (gender === "male") {
    bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
  } else {
    bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
  }
  const caloricRequirement = bmr * activityFactor[activityLevel];
  return [Math.round(bmr), Math.round(caloricRequirement)];
};

export const KatchMcArdleFormula = (weight, fat, activityLevel) => {
    console.log(weight, fat, activityLevel)
  const lbm = weight * ((100 - fat) / 100);
  const bmr = 370 + lbm * 21.6;
  const caloricRequirement = bmr * activityFactor[activityLevel];

  return [Math.round(bmr), Math.round(caloricRequirement)];
};
