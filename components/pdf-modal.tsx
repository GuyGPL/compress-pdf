import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Rotate90DegreesCcwOutlinedIcon from "@mui/icons-material/Rotate90DegreesCcwOutlined";
import Rotate90DegreesCwOutlinedIcon from "@mui/icons-material/Rotate90DegreesCwOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import ZoomOutOutlinedIcon from "@mui/icons-material/ZoomOutOutlined";
import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import { Fragment, ReactElement, useState } from "react";
import { Document, Page } from "react-pdf";

type PDFModalProps = {
    openModal: boolean;
    file: string | ArrayBuffer | null;
    onClose: () => void;
};

export default function PDFModal({ openModal, file, onClose }: PDFModalProps): ReactElement {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [scale, setScale] = useState<number>(1);
    const [rotate, setRotate] = useState<number>(0);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <Modal
            open={openModal}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Fragment>
                <Box
                    sx={{
                        position: "absolute",
                        top: "1%",
                        left: "50%",
                        transform: "translate(-50%, -30%)",
                        zIndex: "1",
                        bgcolor: "grey.600",
                        borderRadius: " 0 0 8px 8px",
                        height: "30px",
                    }}
                >
                    <Stack direction="row" height="100%" alignItems="center">
                        <IconButton
                            disabled={pageNumber <= 1}
                            onClick={() => setPageNumber(pageNumber - 1)}
                            sx={{ color: "grey.800" }}
                        >
                            <ChevronLeftOutlinedIcon />
                        </IconButton>
                        <Typography variant="caption">
                            {pageNumber} / {numPages}
                        </Typography>
                        <IconButton
                            disabled={pageNumber >= (numPages || 0)}
                            onClick={() => setPageNumber(pageNumber + 1)}
                            sx={{ color: "grey.800" }}
                        >
                            <ChevronRightOutlinedIcon />
                        </IconButton>

                        <IconButton
                            sx={{ color: "grey.800" }}
                            onClick={() => setScale(scale + 0.1)}
                        >
                            <ZoomInOutlinedIcon />
                        </IconButton>
                        <IconButton
                            sx={{ color: "grey.800" }}
                            onClick={() => setScale(scale - 0.1)}
                        >
                            <ZoomOutOutlinedIcon />
                        </IconButton>
                        <IconButton
                            sx={{ color: "grey.800" }}
                            onClick={() => setRotate(rotate + 90)}
                        >
                            <Rotate90DegreesCwOutlinedIcon />
                        </IconButton>
                        <IconButton
                            sx={{ color: "grey.800" }}
                            onClick={() => setRotate(rotate - 90)}
                        >
                            <Rotate90DegreesCcwOutlinedIcon />
                        </IconButton>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        height: "90vh",
                        overflowY: "auto",
                        maxWidth: "90%",
                    }}
                >
                    <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} scale={scale} rotate={rotate} />
                    </Document>
                </Box>
            </Fragment>
        </Modal>
    );
}
