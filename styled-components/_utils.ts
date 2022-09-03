import { TGridMultiplier } from "./_interface";

export const getGridMultiplierAsNumber = (value: TGridMultiplier | string) => {
  const multiplerAsNumber = Number(value.replace("x", ""));
  return multiplerAsNumber;
};
