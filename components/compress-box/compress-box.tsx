"use client";
import { useNotification } from "@/contexts/notification-context";
import { useCompressPDF } from "@/hooks/use-compress-pdf";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { ChangeEvent, Fragment, ReactElement, useRef, useState } from "react";
import { LOGO_URL } from "../../constants/logo-url";
import { EXAMPLE_TOOLS } from "../../constants/more-tools";
import PDFModal from "../pdf-modal";
import CompressBoxTemplate from "./compress-box-template";
import CompressContentStepOne from "./compress-content/compress-content-step-one";
import CompressContentStepThree from "./compress-content/compress-content-step-three";
import CompressContentStepTwo from "./compress-content/compress-content-step-two";
import CompressForm from "./compress-form";

export type FileWithPreview = {
    file: File;
    preview: string | ArrayBuffer;
};

export default function CompressBox(): ReactElement {
    const {
        compressJobId,
        downloadUrl,
        handleUploadFiles,
        deleteUploadFiles,
        handleCompressFiles,
        isPendingUploadFiles,
        isPendingCompressFiles,
    } = useCompressPDF();

    const { notificationInfo } = useNotification();
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [step, setStep] = useState<number>(1);
    const [filesWithPreview, setFilesWithPreview] = useState<FileWithPreview[]>([]);
    const [previewFile, setPreviewFile] = useState<string | ArrayBuffer | null>(null);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const selectedFiles = event.target.files;

        if (selectedFiles && selectedFiles.length) {
            setStep(2);
            loadFilePreviews(selectedFiles);
        }
    };

    function loadFilePreviews(selectedFiles: FileList) {
        const filesWithPreviews: FileWithPreview[] = [];

        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];

            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                if (event.target?.result) {
                    const preview = event.target.result;
                    filesWithPreviews.push({ file, preview });

                    if (filesWithPreviews.length === selectedFiles.length) {
                        setFilesWithPreview(filesWithPreviews);
                        handleUploadFiles(filesWithPreviews);
                    }
                }
            };

            fileReader.readAsDataURL(file);
        }
    }

    const handleOnDelete = (event: React.MouseEvent, index: number) => {
        event.stopPropagation();
        event.preventDefault();
        setFilesWithPreview((prevFilesWithPreviews) => {
            const updatedFilesWithPreviews = prevFilesWithPreviews.filter((_, i) => i !== index);

            if (updatedFilesWithPreviews.length === 0) {
                setStep(1);
            }
            deleteUploadFiles(index);

            return updatedFilesWithPreviews;
        });
    };

    const handleOnRestart = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setStep(1);
        setFilesWithPreview([]);
    };

    const handleOnDownload = () => {
        if (!downloadUrl) return;
        notificationInfo("Downloading...");
        const a = document.createElement("a");
        a.href = downloadUrl;
        filesWithPreview.length === 1
            ? (a.download = filesWithPreview[0].file.name)
            : (a.download = `pdf24_${compressJobId?.slice(12, 22)}.zip`);

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const handleSelectFiles = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handlePreviewFile = (index: number) => {
        setPreviewFile(filesWithPreview[index].preview);
    };

    const clearPreviewFile = () => {
        setPreviewFile(null);
    };

    const renderContent = (): ReactElement => {
        switch (step) {
            default:
            case 1:
                return <CompressContentStepOne handleSelectFiles={handleSelectFiles} />;
            case 2:
                return (
                    <CompressContentStepTwo
                        filesWithPreviews={filesWithPreview}
                        isPendingUploadFiles={isPendingUploadFiles}
                        handleDeleteFile={handleOnDelete}
                        handlePreviewFile={handlePreviewFile}
                    />
                );
            case 3:
                return (
                    <CompressContentStepThree
                        filesWithPreviews={filesWithPreview}
                        isPendingCompressFiles={isPendingCompressFiles}
                        handleOnRestart={handleOnRestart}
                        downloadUrl={downloadUrl}
                        downloadFiles={handleOnDownload}
                    />
                );
        }
    };

    return (
        <Fragment>
            <input
                id="files-upload"
                type="file"
                accept="application/pdf"
                disabled={step === 3}
                onChange={handleOnChange}
                ref={fileInputRef}
                hidden
                multiple
            />
            <Box>
                <CompressBoxTemplate step={step}>{renderContent()}</CompressBoxTemplate>
                {step === 2 && (
                    <Container>
                        <Box
                            width="100%"
                            height="85px"
                            border="1px dashed var(--mui-palette-primary-600)"
                            borderTop="none"
                            borderRadius="0 0 7px 7px"
                        />
                        <Box display="flex" alignItems="center" justifyContent="center" mt="-60px">
                            <Box width="60%">
                                <CompressForm
                                    setStep={setStep}
                                    handleCompressFiles={handleCompressFiles}
                                    isPendingUploadFiles={isPendingUploadFiles}
                                />
                            </Box>
                        </Box>
                        <PDFModal
                            openModal={!!previewFile}
                            file={previewFile}
                            onClose={clearPreviewFile}
                        />
                    </Container>
                )}
                {step === 3 && (
                    <Fragment>
                        <Container>
                            <Box
                                width="100%"
                                bgcolor="primary.600"
                                mt="100px"
                                borderRadius="12px 12px 0px 0px"
                            >
                                <Stack color="common.white" p={1} borderRadius="4px">
                                    <Grid container direction="row" justifyContent="center" gap={1}>
                                        {EXAMPLE_TOOLS.map((label, index) => (
                                            <Grid item key={index}>
                                                <Stack
                                                    direction="row"
                                                    border="1px solid var(--mui-palette-primary-400)"
                                                    p={1}
                                                    spacing={2}
                                                >
                                                    <Stack direction="row" alignItems="center">
                                                        <Box
                                                            component="img"
                                                            sx={{
                                                                width: "51px",
                                                                height: "60px",
                                                            }}
                                                            alt="Dropbox"
                                                            src={LOGO_URL.application}
                                                        />
                                                        <Typography
                                                            variant="body1"
                                                            maxWidth="100px"
                                                        >
                                                            {label}
                                                        </Typography>
                                                    </Stack>
                                                    <StarBorderIcon
                                                        sx={{
                                                            "&:hover": {
                                                                color: "orange",
                                                            },
                                                        }}
                                                    />
                                                </Stack>
                                            </Grid>
                                        ))}
                                    </Grid>
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        justifyContent="center"
                                        spacing={1}
                                    >
                                        <Typography>See all tools</Typography>
                                        <ChevronRightOutlinedIcon fontSize="large" />
                                    </Stack>
                                </Stack>
                            </Box>
                        </Container>
                        <Divider />
                    </Fragment>
                )}
            </Box>
        </Fragment>
    );
}
