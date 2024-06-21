import PDFViewer from "@/components/pdf-viewer";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { Box, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { FileWithPreview } from "../compress-box";

type CompressContentStepTwoProps = {
    filesWithPreviews: FileWithPreview[];
    isPendingUploadFiles: boolean;
    handleDeleteFile: (event: React.MouseEvent, index: number) => void;
    handlePreviewFile: (index: number) => void;
};

const CompressContentStepTwo: React.FC<CompressContentStepTwoProps> = ({
    filesWithPreviews,
    isPendingUploadFiles,
    handleDeleteFile,
    handlePreviewFile,
}) => {
    return (
        <Grid
            container
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            gap={4}
            py={2}
        >
            {filesWithPreviews.map((item, index) => (
                <Grid
                    item
                    key={item.file.name + index}
                    display="flex"
                    direction="column"
                    width="200px"
                >
                    <Stack direction="row" justifyContent="space-between">
                        <IconButton
                            sx={{ color: "grey.800" }}
                            onClick={() => handlePreviewFile(index)}
                        >
                            <ZoomInIcon fontSize="medium" />
                        </IconButton>
                        <IconButton
                            color="error"
                            disabled={isPendingUploadFiles}
                            onClick={(event) => handleDeleteFile(event, index)}
                        >
                            <DeleteOutlinedIcon fontSize="medium" />
                        </IconButton>
                    </Stack>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            px: 4,
                            mb: 1,
                        }}
                    >
                        <PDFViewer file={item.preview} scale={0.2} />
                    </Box>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Tooltip title={item.file.name} placement="top-start">
                            <Typography variant="caption" noWrap>
                                {item.file.name}
                            </Typography>
                        </Tooltip>
                        <Typography variant="caption" noWrap sx={{ overflow: "visible" }}>
                            {`${(item.file.size / 1000).toFixed(2)} MB`}
                        </Typography>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
};

export default CompressContentStepTwo;
