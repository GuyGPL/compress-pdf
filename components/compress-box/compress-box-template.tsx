import { Box, Container } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import CompressHeader from "./compress-header";

type CompressBoxTemplateProps = {
    step: number;
    children: ReactNode;
};

export default function CompressBoxTemplate({
    step,
    children,
}: CompressBoxTemplateProps): ReactElement {
    const getStyles = (step: number) => {
        switch (step) {
            case 1:
                return {
                    border: "1px dashed var(--mui-palette-primary-600)",
                    borderRadius: "7px",
                    bgcolor: "primary.200",
                };
            case 2:
                return {
                    border: "none",
                    borderRadius: "7px 7px 0 0",
                    bgcolor: "primary.200",
                };
            case 3:
                return {
                    border: "1px solid var(--mui-palette-error-400)",
                    borderRadius: "12px",
                    bgcolor: "primary.200",
                };
        }
    };

    return (
        <Container>
            <Box sx={getStyles(step)}>
                <label htmlFor="files-upload">
                    <CompressHeader step={step} />
                    {children}
                </label>
            </Box>
        </Container>
    );
}
