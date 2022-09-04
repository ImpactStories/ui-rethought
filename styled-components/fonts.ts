import { Theme } from "../configuration/config";

// Create font faces from the font configuration
export const buildFonts = () => {
  const fonts = Object.keys(Theme.fontsAdditionals);
  const fontFaces = fonts.map((font) => {
    return (Theme.fontsAdditionals as any)[font]?.map((fontStyle: any) => {
      return `
        @font-face {
          font-family: ${font};
          font-style: ${fontStyle.style};
          font-weight: ${fontStyle.weight};
          src: url(${fontStyle.src}) format('woff2');
        }
      `;
    });
  });
  return fontFaces;
};
