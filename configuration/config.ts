/**
 * The configuration is your starting point
 *
 * Define colors, device sizes, used fonts etc.
 * Everything defined here can have custom keys and values.
 *
 * Everything will be automatically added to types for the corresponding groups
 */

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
    desktop: "1024px",
  },

  fonts: {
    "Noto Sans": [
      {
        style: "normal",
        weight: 700,
        src: "assets/fonts/noto/noto-sans-v27-latin-700.woff2",
      },
    ],
  },
};

export type TFont = keyof typeof Theme.fonts;
export type TColor = keyof typeof Theme.colors;
export type TDevice = keyof typeof Theme.deviceSizes;
