export const Theme = {
  gridBaseValue: 2,

  colors: {
    "grey-100": "#eee",
    "grey-200": "#eee",
    "red-100": "#FF0000",
  },

  fonts: {
    primary: {
      path: "../abc.woff2",
    },
  },
};

export type TColor = keyof typeof Theme.colors;
