import { Card, CardContent, Stack, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactElement } from "react";

export type FeatureBoxProps = {
    title: string;
    description: string;
    icon: OverridableComponent<SvgIconTypeMap>;
};

export default function FeatureBox({ title, description, icon }: FeatureBoxProps): ReactElement {
    const Icon = icon;
    return (
        <Card
            sx={{
                width: "100%",
                height: "100%",
                border: "1px solid var(--mui-palette-primary-400)",
                boxShadow: "none",
                bgcolor: "inherit",
                borderRadius: "5px",
            }}
        >
            <CardContent sx={{ height: "100%" }}>
                <Stack spacing={2} sx={{ height: "100%" }}>
                    <Stack direction="row" justifyContent="space-between" sx={{ height: "30%" }}>
                        <Typography
                            variant="body1"
                            fontWeight={700}
                            maxWidth={{ xs: "90%", md: "70%" }}
                        >
                            {title}
                        </Typography>
                        <Icon color="primary" fontSize="large" />
                    </Stack>
                    <Typography variant="body2" color="primary.700" sx={{ height: "70%" }}>
                        {description}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}
