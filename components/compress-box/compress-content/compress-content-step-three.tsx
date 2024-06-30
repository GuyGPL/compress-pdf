import PDFModal from "@/components/pdf-modal";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import {
    Box,
    Button,
    CircularProgress,
    Divider,
    Grid,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { FileWithPreview } from "../compress-box";

type CompressContentStepThreeProps = {
    isPendingCompressFiles: boolean;
    downloadUrl: string | undefined;
    filesWithPreviews: FileWithPreview[];
    downloadFiles: () => void;
    handleOnRestart: (event: React.MouseEvent) => void;
};

const CompressContentStepThree: React.FC<CompressContentStepThreeProps> = ({
    isPendingCompressFiles,
    downloadUrl,
    filesWithPreviews,
    downloadFiles,
    handleOnRestart,
}) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
            {isPendingCompressFiles ? (
                <CircularProgress />
            ) : (
                <Box width={{ xs: "90%", sm: "60%", md: "50%" }}>
                    <Stack justifyContent="center" alignItems="center" spacing={1} p={3}>
                        <SimCardDownloadIcon sx={{ fontSize: "35px" }} />
                        <Typography variant="h6" fontWeight={700}>
                            Your files are ready
                        </Typography>
                        <Stack justifyContent="center" alignItems="center">
                            {filesWithPreviews.map((item, index) => (
                                <Tooltip
                                    title={item.file.name}
                                    key={item.file.name + index}
                                    placement="top"
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
                                    <Typography variant="caption" noWrap>
                                        {item.file.name}
                                    </Typography>
                                </Tooltip>
                            ))}
                        </Stack>
                        <Grid
                            container
                            direction={{ xs: "column", sm: "row" }}
                            justifyContent="center"
                            alignItems="center"
                            columns={14}
                            gap={1}
                        >
                            <Grid item xs={4} alignItems="center" justifyContent="center">
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    sx={{ height: "48px", width: "140px" }}
                                    onClick={downloadFiles}
                                >
                                    Download
                                </Button>
                            </Grid>
                            {filesWithPreviews.length === 1 && (
                                <Grid item xs={4}>
                                    <Button
                                        color="secondary"
                                        variant="outlined"
                                        sx={{ height: "48px", width: "140px" }}
                                        onClick={() => setOpenModal(true)}
                                    >
                                        Preview
                                    </Button>
                                </Grid>
                            )}
                            <Grid item xs={4}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    sx={{ height: "48px", width: "140px", lineHeight: "1.2" }}
                                >
                                    Continue in another tool
                                </Button>
                            </Grid>
                        </Grid>
                        <Divider
                            sx={{
                                width: "100%",
                                borderTop: "0.5px solid var(--mui-palette-grey-600)",
                            }}
                        />
                        <Stack direction="row" spacing={2}>
                            <Button sx={{ p: 2, height: 4 }} color="error">
                                <Stack direction="row" spacing={1}>
                                    <DeleteOutlineIcon />
                                    <Typography variant="body1">Delete</Typography>
                                </Stack>
                            </Button>
                            <Button
                                sx={{ p: 2, height: 4 }}
                                onClick={(event) => handleOnRestart(event)}
                            >
                                <Stack direction="row" spacing={1}>
                                    <RestartAltIcon sx={{ color: "grey.800" }} />
                                    <Typography color="grey.800" variant="body1">
                                        Restart
                                    </Typography>
                                </Stack>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            )}
            {downloadUrl && (
                <PDFModal
                    openModal={openModal}
                    file={downloadUrl}
                    onClose={() => setOpenModal(false)}
                />
            )}
        </Box>
    );
};

export default CompressContentStepThree;
