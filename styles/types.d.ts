import type { CssVarsTheme } from "@mui/material/styles";
import type { Theme as BaseTheme } from "@mui/material/styles/createTheme";

export type Theme = Omit<BaseTheme, "palette"> & CssVarsTheme;
export type ColorScheme = "dark" | "light";

export interface PaletteRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
}
