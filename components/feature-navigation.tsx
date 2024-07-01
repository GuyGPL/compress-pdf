"use client";
import { Grid, Link, Stack, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { NAVIGATE_FOOTER } from "../constants/navigate-footer";

export default function FeatureNavigation() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));

    const itemsPerRow = isXs ? 2 : isMd ? 7 : isLg ? 7 : 3;

    const columns = Math.ceil(NAVIGATE_FOOTER.length / 7);

    const itemsInColumns = Array.from({ length: columns }, (_, colIndex) =>
        NAVIGATE_FOOTER.slice(colIndex * 7, colIndex * 7 + 7)
    );

    return (
        <Stack spacing={2} sx={{ py: 4 }}>
            <Grid
                columns={14}
                gap={2}
                container
                sx={{
                    justifyContent: "space-around",
                }}
            >
                {itemsInColumns.map((column, colIndex) => (
                    <Grid
                        item
                        xs={6}
                        sm={4}
                        md={2}
                        lg={2}
                        key={colIndex}
                        sx={{
                            flexGrow: 1,
                            flexBasis: "auto",
                            minWidth: 0,
                        }}
                    >
                        {column.map((item, index) => (
                            <Link
                                underline="none"
                                key={index}
                                sx={{
                                    display: "block",
                                    width: "100%",
                                    pl: 3,
                                    borderLeft:
                                        colIndex % itemsPerRow !== 0
                                            ? "1px solid var(--mui-palette-grey-600)"
                                            : "none",
                                    cursor: "pointer",
                                }}
                            >
                                <Tooltip
                                    title={item}
                                    placement="top-start"
                                    slotProps={{
                                        popper: {
                                            modifiers: [
                                                {
                                                    name: "offset",
                                                    options: {
                                                        offset: [0, -10],
                                                    },
                                                },
                                            ],
                                        },
                                    }}
                                >
                                    <Typography variant="body2" color="text.primary" noWrap>
                                        {item}
                                    </Typography>
                                </Tooltip>
                            </Link>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}
