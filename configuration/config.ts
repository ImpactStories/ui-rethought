export const Theme = {
  gridBaseValue: 2,

  colors: {
    "grey-100": "#eee",
    "grey-200": "#eee",
    "red-100": "#FF0000",
  },

  deviceSizes: {
    mobile: "450px",
    tablet: "768px",
    desktop: "1024px"
  }
};

export type TColor = keyof typeof Theme.colors;
export type TDevice = keyof typeof Theme.deviceSizes;
