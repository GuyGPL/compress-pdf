import CompressBox from "@/components/compress-box/compress-box";
import FeatureBox from "@/components/feature-box";
import FeatureNavigation from "@/components/feature-navigation";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { FEATURE_LIST } from "../../constants/feature-detail";
import { LOGO_URL } from "../../constants/logo-url";

export default function Page(): ReactElement {
    return (
        <Box>
            <Box mb={10}>
                <Container maxWidth="lg" sx={{ py: 6, position: "relative" }}>
                    <Typography textAlign="center">
                        <Box
                            component="img"
                            sx={{
                                position: { xs: "relative", lg: "absolute" },
                                top: { xs: "auto", lg: "50%" },
                                left: { xs: "auto", lg: "50%" },
                                transform: { sm: "none", lg: "translate(-50%, -50%)" },
                                height: "80px",
                                width: "78px",
                            }}
                            alt="Dropbox"
                            src={LOGO_URL.application}
                        />
                    </Typography>
                    <Stack spacing={2}>
                        <Typography variant="h3" fontWeight={700} noWrap>
                            Compress PDF
                        </Typography>
                        <Typography variant="body1" color="grey.700" noWrap>
                            PDF compressor to reduce the size of PDF files quickly and easily
                        </Typography>
                    </Stack>
                </Container>
                <CompressBox />
            </Box>
            <Container>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Box
                        bgcolor="secondary.500"
                        display="block"
                        width="60%"
                        height="100px"
                        mb="100px"
                    >
                        <Stack alignItems="center">
                            <Typography>Advertisement</Typography>
                        </Stack>
                    </Box>
                </Box>
            </Container>
            <Box bgcolor="var(--mui-palette-primary-200)" py={6}>
                <Container maxWidth="xl" sx={{ py: 6 }}>
                    <Stack spacing={3}>
                        <Stack alignItems="center" spacing={2}>
                            <Typography variant="h4" fontWeight={700}>
                                Information
                            </Typography>
                            <Box>
                                <Grid
                                    container
                                    direction="row"
                                    borderRadius="50px"
                                    bgcolor="background.default"
                                    py={1}
                                    px={3}
                                    justifyContent="center"
                                    gap={2}
                                >
                                    <Grid item>
                                        <Stack direction="row" spacing={1}>
                                            <CheckCircleOutlineIcon color="primary" />
                                            <Typography>Windows</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item>
                                        <Stack direction="row" spacing={1}>
                                            <CheckCircleOutlineIcon color="primary" />
                                            <Typography>Linux</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item>
                                        <Stack direction="row" spacing={1}>
                                            <CheckCircleOutlineIcon color="primary" />
                                            <Typography>MAC</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item>
                                        <Stack direction="row" spacing={1}>
                                            <CheckCircleOutlineIcon color="primary" />
                                            <Typography>iPhone</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item>
                                        <Stack direction="row" spacing={1}>
                                            <CheckCircleOutlineIcon color="primary" />
                                            <Typography>Android</Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                        <Grid
                            container
                            sx={{
                                gap: 2,
                                justifyContent: "center",
                                gridAutoRows: "min-content",
                            }}
                        >
                            {FEATURE_LIST.map(({ id, ...data }) => (
                                <Grid key={id} item xs={8} sm={5} md={3}>
                                    <FeatureBox {...data} />
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                </Container>
            </Box>
            <Container maxWidth="lg" sx={{ pt: 7, pb: 4 }}>
                <Box sx={{ mb: 10 }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{
                                border: "1px solid var(--mui-palette-primary-600)",
                                borderLeft: "17px solid var(--mui-palette-primary-600)",
                                boxShadow: "none",
                            }}
                        >
                            <Typography variant="h3" color="var(--mui-palette-primary-600)">
                                FAQ
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" p={2}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                                maximus lorem. Quisque ut consectetur sapien. Donec in interdum
                                ipsum. Suspendisse sagittis mollis mattis. Ut et risus non elit
                                pulvinar ullamcorper at nec nibh. Nullam finibus, ligula et dapibus
                                elementum, quam ante molestie nisi, id varius leo eros eget sapien.
                                Duis at libero at ante viverra commodo. Cras bibendum ligula ut nunc
                                luctus.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Divider sx={{ borderColor: "primary.400" }} />
                <FeatureNavigation />
            </Container>
        </Box>
    );
}
