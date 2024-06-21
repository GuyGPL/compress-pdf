import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

type CompressHeaderProps = {
    step: number;
};

export default function CompressHeader({ step }: CompressHeaderProps): ReactElement {
    return (
        <Grid
            container
            direction={{ xs: "column", sm: "row" }}
            gap={2}
            columns={14}
            justifyContent="space-around"
            alignItems="center"
            height="100%"
            p={2}
        >
            <Grid item sm={4}>
                <Box textAlign="center">
                    <Box display="inline-block">
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                            sx={{
                                border: "1px solid var(--mui-palette-primary-600)",
                                borderRadius: "30px",
                                height: "32px",
                                py: 1,
                                px: 2,
                            }}
                        >
                            {step >= 2 && (
                                <CheckCircleIcon
                                    sx={{
                                        color: "common.white",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        bgcolor: "primary.600",
                                        fontSize: "15px",
                                    }}
                                />
                            )}
                            <Typography
                                noWrap
                                variant="caption"
                                fontWeight={700}
                                color="primary.600"
                            >
                                1. Upload your PDFs
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Grid>
            <Grid item sm={4}>
                <Box textAlign="center">
                    <Box display="inline-block">
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                            sx={{
                                border: `1px solid ${
                                    step >= 2
                                        ? "var(--mui-palette-primary-600)"
                                        : "var(--mui-palette-grey-600)"
                                }`,
                                borderRadius: "30px",
                                height: "32px",

                                py: 1,
                                px: 2,
                            }}
                        >
                            {step === 3 && (
                                <CheckCircleIcon
                                    sx={{
                                        fontSize: "15px",
                                        color: "common.white",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        bgcolor: "primary.600",
                                    }}
                                />
                            )}
                            <Typography
                                noWrap
                                variant="caption"
                                fontWeight={700}
                                color={step >= 2 ? "primary.600" : "grey.600"}
                            >
                                2. Choose compression
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Grid>
            <Grid item sm={4}>
                <Box textAlign="center">
                    <Box display="inline-block">
                        <Typography
                            noWrap
                            variant="caption"
                            fontWeight={700}
                            color={step >= 3 ? "primary.600" : "grey.600"}
                            sx={{
                                border: `1px solid ${
                                    step >= 3
                                        ? "var(--mui-palette-primary-600)"
                                        : "var(--mui-palette-grey-600)"
                                }`,
                                borderRadius: "30px",
                                height: "32px",
                                py: 1,
                                px: 2,
                            }}
                        >
                            3. Done
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
