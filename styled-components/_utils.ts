import { TGridMultiplier } from "./_interface";

export const getPixelFromGridMultiplier = (value: TGridMultiplier | string) => {
  const multiplerAsNumber = Number(value.replace("x", ""));
  return multiplerAsNumber;
};
