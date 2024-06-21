import {
    Box,
    Button,
    Grid,
    Slider,
    Stack,
    Switch,
    TextField,
    Typography,
    alpha,
} from "@mui/material";
import { useState } from "react";

type CompressFormProps = {
    isPendingUploadFiles: boolean;
    setStep: (num: number) => void;
    handleCompressFiles: (
        dpi: number,
        imageQuality: number,
        colorMode: "" | "grey"
    ) => Promise<void>;
};

export default function CompressForm({
    isPendingUploadFiles,
    setStep,
    handleCompressFiles,
}: CompressFormProps) {
    const [dpi, setDpi] = useState<number>(150);
    const [imageQuality, setImageQuality] = useState<number>(50);
    const [colorMode, setColorMode] = useState<"" | "grey">("");

    const handleSliderChange = (_: Event, newValue: number | number[]) => {
        const value = newValue as number;
        setDpi((value * 300) / 100);
        setImageQuality(value);
    };

    const handleFileCompression = async () => {
        try {
            await handleCompressFiles(dpi, imageQuality, colorMode);
            setStep(3);
        } catch (error) {
            setStep(2);
        }
    };

    return (
        <Stack alignItems="center" bgcolor="background.default" spacing={2} p={1}>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                bgcolor="background.default"
                height="100px"
                width="100%"
                spacing={2}
                p={2}
            >
                <Typography variant="caption">Small Size Low Quality</Typography>
                <Slider
                    size="small"
                    value={imageQuality}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={0}
                    max={100}
                    sx={{ color: "purple" }}
                    onChange={handleSliderChange}
                />
                <Typography variant="caption">Big Size High Quality</Typography>
            </Stack>
            <Stack
                bgcolor="primary.200"
                width="100%"
                border="1px solid var(--mui-palette-primary-400)"
                borderRadius="4px"
                p={2}
                spacing={2}
            >
                <Typography variant="caption">Compression Settings</Typography>
                <Grid container gap={2} columns={14} justifyContent="center">
                    <Grid item>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Typography variant="caption" noWrap textOverflow="unset">
                                DPI
                            </Typography>
                            <Box maxWidth={{ xs: "100px", md: "130px" }}>
                                <TextField
                                    size="small"
                                    type="number"
                                    value={dpi}
                                    onChange={(e) => setDpi(Number(e.target.value))}
                                    inputProps={{ min: 0, max: 300 }}
                                />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Typography variant="caption" noWrap textOverflow="unset">
                                Image quality
                            </Typography>
                            <Box maxWidth={{ xs: "100px", md: "130px" }}>
                                <TextField
                                    size="small"
                                    type="number"
                                    value={imageQuality}
                                    onChange={(e) => setImageQuality(Number(e.target.value))}
                                    inputProps={{ min: 0, max: 100 }}
                                />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack direction="row" alignItems="center" justifyContent="center">
                            <Typography variant="caption">Color</Typography>
                            <Switch
                                size="medium"
                                checked={colorMode === "grey"}
                                onChange={() => setColorMode(colorMode === "grey" ? "" : "grey")}
                                sx={{
                                    "& .MuiSwitch-switchBase.Mui-checked": {
                                        color: "#49454F",
                                        "&:hover": {
                                            backgroundColor: alpha("#1C1B1F1F", 0.12),
                                        },
                                    },
                                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                                        backgroundColor: "#E7E0EC",
                                        border: "1px solid #79747E",
                                    },
                                }}
                            />
                            <Typography variant="caption">Grey</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleFileCompression}
                disabled={isPendingUploadFiles}
            >
                <Typography variant="body1" px={1} py="4px">
                    Compress
                </Typography>
            </Button>
        </Stack>
    );
}
