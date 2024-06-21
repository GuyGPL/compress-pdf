import SplitButton from "@/components/split-button";
import { Box, Stack, Typography } from "@mui/material";
import { LOGO_URL } from "../../../constants/logo-url";

type CompressContentStepOneProps = {
    handleSelectFiles: () => void;
};

const CompressContentStepOne: React.FC<CompressContentStepOneProps> = ({ handleSelectFiles }) => {
    return (
        <Stack spacing={1} justifyContent="center" alignItems="center" minHeight="300px">
            <SplitButton
                main={{ display: "Select files", action: handleSelectFiles }}
                options={[
                    {
                        display: "Select files from Dropbox",
                        action: () => console.log("Dropbox Clicked"),
                    },
                    {
                        display: "Select files from Google Drive",
                        action: () => console.log("Google Drive Clicked"),
                    },
                ]}
            />
            <Typography variant="caption" color="grey.700">
                or drag and drop file into this area
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                <Box
                    component="img"
                    sx={{ height: "10px", width: "51px" }}
                    alt="Dropbox"
                    src={LOGO_URL.dropbox}
                />
                <Box
                    component="img"
                    sx={{ height: "18px", width: "65px" }}
                    alt="Google Drive"
                    src={LOGO_URL.googleDrive}
                />
            </Stack>
        </Stack>
    );
};

export default CompressContentStepOne;
