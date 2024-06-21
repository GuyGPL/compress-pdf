"use client";
import { Box } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type PDFViewerProps = {
    file: string | ArrayBuffer;
    scale: number;
};

const PDFViewer = ({ file, scale }: PDFViewerProps) => {
    return (
        <Box>
            <Document file={file}>
                <Page scale={scale} pageNumber={1} height={800} />
            </Document>
        </Box>
    );
};

export default PDFViewer;
