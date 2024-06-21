import type { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography = {
    fontFamily: "Arial, sans-serif",
    body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 },
    body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.57 },
    button: { fontWeight: 400 },
    caption: { fontSize: "0.75rem", fontWeight: 400, lineHeight: 1.66 },
    subtitle1: { fontSize: "1rem", fontWeight: 500, lineHeight: 1.57 },
    subtitle2: { fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.57 },
    overline: {
        fontSize: "0.75rem",
        fontWeight: 500,
        letterSpacing: "0.5px",
        lineHeight: 2.5,
        textTransform: "uppercase",
    },
    h1: { fontSize: "2.986rem", fontWeight: 400, lineHeight: 1.2 },
    h2: { fontSize: "2.488rem", fontWeight: 400, lineHeight: 1.2 },
    h3: { fontSize: "2.074rem", fontWeight: 400, lineHeight: 1.2 },
    h4: { fontSize: "1.728rem", fontWeight: 400, lineHeight: 1.2 },
    h5: { fontSize: "1.44rem", fontWeight: 400, lineHeight: 1.2 },
    h6: { fontSize: "1.2rem", fontWeight: 400, lineHeight: 1.2 },
} satisfies TypographyOptions;
