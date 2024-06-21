import type { ColorSystemOptions } from "@mui/material/styles";

import { neonBlue, nevada, redOrange } from "./colors";
import { ColorScheme } from "./types";

export const colorSchemes = {
    light: {
        palette: {
            action: { disabledBackground: "rgba(0, 0, 0, 0.06)" },
            background: {
                default: "var(--mui-palette-common-white)",
                defaultChannel: "255 255 255",
            },
            common: { black: "#000000", white: "#ffffff" },
            divider: "var(--mui-palette-grey-600)",
            dividerChannel: "220 223 228",
            grey: {
                600: "#C1C1C1",
                700: "#585858",
                800: "#232323",
                900: "#000000",
            },
            primary: {
                200: "#EFF6FF",
                400: "#73B2FF",
                500: "#4A94EE",
                600: "#327FDE",
                700: "#69829E",
                main: "#327FDE",
            },
            secondary: {
                500: "#F9B66D",
                600: "#E0923D",
                main: "#F9B66D",
            },
            error: {
                600: "#FF7272",
                main: "#FF7272",
            },
            text: {
                primary: "var(--mui-palette-grey-800)",
                secondary: "var(--mui-palette-primary-700)",
            },
        },
    },
    dark: {
        palette: {
            action: { disabledBackground: "rgba(0, 0, 0, 0.06)" },
            background: {
                default: "var(--mui-palette-common-black)",
                defaultChannel: "255 255 255",
            },
            common: { black: "#000000", white: "#ffffff" },
            divider: "var(--mui-palette-neutral-200)",
            dividerChannel: "220 223 228",
            grey: { ...nevada },
            primary: {
                ...neonBlue,
                light: neonBlue[300],
                main: neonBlue[400],
                dark: neonBlue[500],
                contrastText: "var(--mui-palette-common-black)",
            },
            secondary: {
                ...nevada,
                light: nevada[100],
                main: nevada[200],
                dark: nevada[300],
                contrastText: "var(--mui-palette-common-black)",
            },
            error: {
                light: redOrange[300],
                main: redOrange[400],
                dark: redOrange[500],
                contrastText: "var(--mui-palette-common-black)",
            },
            text: {
                primary: "var(--mui-palette-common-white)",
                secondary: "var(--mui-palette-primary-700)",
            },
        },
    },
} satisfies Partial<Record<ColorScheme, ColorSystemOptions>>;
