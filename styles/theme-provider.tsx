"use client";

import CssBaseline from "@mui/material/CssBaseline";
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import * as React from "react";
import { colorSchemes } from "./color-schema";
import { components } from "./components/components";
import { typography } from "./typography";

export interface ThemeProviderProps {
    children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps): React.JSX.Element {
    const theme = extendTheme({
        breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1440 } },
        colorSchemes,
        typography,
        components,
    });
    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            {children}
        </CssVarsProvider>
    );
}
