export const Theme = {
    gridBaseValue: 2,

    colors: {
        "grey-100": "#eee",
        "grey-200": "#eee",
        "red-100": "#FF0000",
    }
}

export type TColor = keyof typeof Theme.colors;
