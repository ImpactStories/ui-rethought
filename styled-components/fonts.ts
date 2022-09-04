import { Theme } from "../configuration/config";

export const buildFonts = () => {
  const fonts = Object.keys(Theme.fonts);
  const fontFaces = fonts.map((font) => {
    return (Theme.fonts as any)[font]?.map((fontStyle: any) => {
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
