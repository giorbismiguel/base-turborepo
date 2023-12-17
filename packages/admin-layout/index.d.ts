import "@mui/material";

interface SidebarTheme {
    background: TypeBackground,
    active: TypeBackground,
    activeColor: TypeBackground,
    color: TypeBackground,
    section: TypeBackground,
}

declare module "@mui/material" {
    export interface Palette {
        common: CommonColors;
        mode: PaletteMode;
        contrastThreshold: number;
        tonalOffset: PaletteTonalOffset;
        primary: PaletteColor;
        secondary: PaletteColor;
        error: PaletteColor;
        warning: PaletteColor;
        info: PaletteColor;
        success: PaletteColor;
        grey: Color;
        sidebar: SidebarTheme;
        text: TypeText;
        divider: TypeDivider;
        action: TypeAction;
        background: TypeBackground;
        spaceSelector: string;
        getContrastText: (background: string) => string;
        augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
    }
}
