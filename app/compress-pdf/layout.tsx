import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import { Box } from "@mui/material";
import { ReactElement, ReactNode } from "react";

interface LayoutInterface {
    children: ReactNode;
}

export default function Layout({ children }: LayoutInterface): ReactElement {
    return (
        <Box>
            <MainNav />
            {children}
            <Footer />
        </Box>
    );
}
