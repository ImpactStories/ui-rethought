/**
 * The configuration is your starting point
 *
 * Define colors, device sizes, used fonts etc.
 * Everything defined here can have custom keys and values.
 *
 * Everything will be automatically added to types for the corresponding groups
 */

export const Theme = {
  /**
   * In many components you can interact with width, height, margins, paddings, etc.
   * You always can define these values using arbitrary values in px, etc. or
   * you can use values based on a multiplier.
   *
   * The values you can use are multipliers of this base value.
   * For example using "3x" will result in 6px (2: baseValue * 3: multiplier)
   */
  gridBaseValue: 2,

  /**
   * There is no requirement for your naming patterns,
   * but we recommend using a {colorName}-{colorValue} combination.
   *
   * This keeps you more flexible than for example grey-dark, grey-darker, ...
   */
  colors: {
    "grey-100": "#eee",
    "grey-200": "#eee",
    "red-100": "#FF0000",
  },

  /**
   * Define as many device sizes as you need.
   * See the utility functions isMinWidth and isMaxWidth
   * to set media queries based on these device sizes
   */
  deviceSizes: {
    mobile: "450px",
    tablet: "768px",
    desktop: "1024px",
  },

  fonts: {
    /**
     * Your primary and secondary font family will automatically
     * be used in your typogrpahy component and wherever fonts
     * are used in our components.
     */
    primary: {
      "Noto Sans": [
        {
          style: "normal",
          weight: 700,
          src: "assets/fonts/noto/noto-sans-v27-latin-700.woff2",
        },
      ],
    },
    secondary: {
      "Noto Sans": [
        {
          style: "normal",
          weight: 700,
          src: "assets/fonts/noto/noto-sans-v27-latin-700.woff2",
        },
      ],
    },

    /**
     * Fonts usually are quite large in width and
     * also designwise it mostly makes sense to use a maximum of two font families
     *
     * Of course there are cases where more families make sense,
     * but think twice before embedding additional fonts.
     */
    additionals: {
      "Noto Sans": [
        {
          style: "normal",
          weight: 700,
          src: "assets/fonts/noto/noto-sans-v27-latin-700.woff2",
        },
      ],
    },
  },
};

export type TFontFamily = keyof typeof Theme.fonts.additionals | keyof typeof Theme.fonts.primary | keyof typeof Theme.fonts.secondary;
export type TFont = "primary" | "secondary" | keyof typeof Theme.fonts.additionals;
export type TColor = keyof typeof Theme.colors;
export type TDevice = keyof typeof Theme.deviceSizes;
