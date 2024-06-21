import { useNotification } from "@/contexts/notification-context";
import { Alert, Snackbar } from "@mui/material";
import { ReactElement } from "react";

export default function Notification(): ReactElement {
    const { notificationType, message, clear } = useNotification();
    return (
        <Snackbar
            open={!!message}
            onClose={clear}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
            <Alert
                onClose={clear}
                severity={notificationType}
                variant="filled"
                sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}
