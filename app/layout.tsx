import { NotificationProvider } from "@/contexts/notification-context";
import QueryClientProviders from "@/contexts/query-client-context";
import { ThemeProvider } from "@/styles/theme-provider";
import { GlobalStyles } from "@mui/material";
import { ReactNode } from "react";

interface LayoutInterface {
    children: ReactNode;
}

const globalStyles = {
    ".hiddenCanvasElement": {
        display: "none",
    },
};

export default function RootLayout({ children }: LayoutInterface) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <GlobalStyles styles={globalStyles} />
                <QueryClientProviders>
                    <NotificationProvider>
                        <ThemeProvider>{children}</ThemeProvider>
                    </NotificationProvider>
                </QueryClientProviders>
            </body>
        </html>
    );
}
