"use client";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
    Box,
    Button,
    Grid,
    IconButton,
    Rating,
    Stack,
    Typography,
    useColorScheme,
} from "@mui/material";
import { Fragment } from "react";

export default function MainNav() {
    const { mode, setMode } = useColorScheme();

    return (
        <Fragment>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                bgcolor="primary.200"
                position="sticky"
                alignItems="center"
                top={0}
                px={{ sm: 5, lg: 16 }}
                py={3}
                zIndex={1200}
            >
                <Box>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="h2" fontWeight={700} noWrap>
                            PDF24
                        </Typography>
                        <Typography variant="h2" color="primary.600" noWrap>
                            Tools
                        </Typography>
                    </Stack>
                </Box>
                <Box>
                    <Grid container alignItems="center" justifyContent="center" gap={1}>
                        <Grid item>
                            <Button>
                                <Typography variant="body1" color="text.primary" noWrap>
                                    Desktop Version
                                </Typography>
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button>
                                <Typography variant="body1" color="text.primary" noWrap>
                                    Contact
                                </Typography>
                            </Button>
                        </Grid>

                        <Grid item>
                            <IconButton
                                sx={{ ml: 1 }}
                                onClick={() => {
                                    if (mode === "light") {
                                        setMode("dark");
                                    } else {
                                        setMode("light");
                                    }
                                }}
                                color="inherit"
                            >
                                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <Button variant="contained">
                                <Typography noWrap>All PDF Tools</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
            <Stack
                bgcolor="primary.600"
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                px={{ xs: 5, lg: 16 }}
                py={2}
                spacing={2}
                color="common.white"
            >
                <Stack direction="row" spacing={1}>
                    <Rating defaultValue={4.9} precision={0.1} />
                    <Typography variant="body1">4,9 (8,381 votes)</Typography>
                </Stack>
                <Stack direction="row" spacing={3}>
                    <Stack direction="row" spacing={1}>
                        <CheckCircleIcon fontSize="small" />
                        <Typography variant="caption" justifyContent="center" alignItems="center">
                            Free
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <CheckCircleIcon fontSize="small" />
                        <Typography variant="caption" justifyContent="center" alignItems="center">
                            Online
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <CheckCircleIcon fontSize="small" />
                        <Typography variant="caption" justifyContent="center" alignItems="center">
                            No Limits
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Fragment>
    );
}
