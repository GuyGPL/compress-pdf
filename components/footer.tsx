import { Box, Link, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

export default function Footer(): ReactElement {
    return (
        <Stack spacing={2}>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Link
                    underline="none"
                    color="grey.600"
                    sx={{
                        cursor: "pointer",
                        "&:hover": {
                            color: "grey.800",
                        },
                    }}
                >
                    <Typography>About us</Typography>
                </Link>
                <Link
                    underline="none"
                    sx={{
                        cursor: "pointer",
                        "&:hover": {
                            color: "grey.800",
                        },
                    }}
                    color="grey.600"
                >
                    <Typography>Help</Typography>
                </Link>
                <Link
                    underline="none"
                    sx={{
                        cursor: "pointer",
                        "&:hover": {
                            color: "grey.800",
                        },
                    }}
                    color="grey.600"
                >
                    <Typography>Contact</Typography>
                </Link>
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Link
                    underline="none"
                    sx={{
                        cursor: "pointer",
                        "&:hover": {
                            color: "grey.800",
                        },
                    }}
                    color="grey.600"
                >
                    <Typography>Legal Notice</Typography>
                </Link>
                <Link
                    underline="none"
                    sx={{
                        cursor: "pointer",
                        "&:hover": {
                            color: "grey.800",
                        },
                    }}
                    color="grey.600"
                >
                    <Typography>Terms of use</Typography>
                </Link>
                <Link
                    underline="none"
                    sx={{
                        cursor: "pointer",
                        "&:hover": {
                            color: "grey.800",
                        },
                    }}
                    color="grey.600"
                >
                    <Typography>Privacy Policy</Typography>
                </Link>
                <Link
                    underline="none"
                    sx={{
                        cursor: "pointer",
                        "&:hover": {
                            color: "grey.800",
                        },
                    }}
                    color="grey.600"
                >
                    <Typography>Privacy Settings</Typography>
                </Link>
            </Stack>
            <Box bgcolor="primary.200" sx={{ py: 1 }}>
                <Typography textAlign="center" color="primary.700">
                    © 2022 Geek Software GmbH — WE love PDF
                </Typography>
            </Box>
        </Stack>
    );
}
