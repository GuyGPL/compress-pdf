import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import CompressIcon from "@mui/icons-material/Compress";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TuneIcon from "@mui/icons-material/Tune";
import TvIcon from "@mui/icons-material/Tv";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const FEATURE_LIST: {
    id: string;
    title: string;
    description: string;
    icon: OverridableComponent<SvgIconTypeMap>;
}[] = [
    {
        id: "e82ee222-4ab8-4027-bfa9-75f16ee47490",
        title: "How to compress PDF files",
        icon: CompressIcon,
        description:
            "Select your PDF files which you would like to compress or drop them into the file box and start the compression. A few seconds later you can download your compressed PDF files.",
    },
    {
        id: "5903d9bf-836c-406d-abb5-1e30a8d6a74f",
        title: "Adjustable quality",
        icon: TuneIcon,
        description:
            "You can adjust the compression quality so that you can tune the compression algorithm in order to get a perfect result. PDF files with images can be compressed better than PDF files with text only.",
    },
    {
        id: "af1f11af-cf39-43b6-a5e8-bdd0c7a874b1",
        title: "Easy to use",
        icon: StarBorderIcon,
        description:
            "PDF24 makes it as easy and fast as possible for you to compress your files. You don't need to install any software, you only have to select your files and start the compression.",
    },
    {
        id: "cb847557-2b0b-4afd-923c-cea414fba334",
        title: "Runs on your system",
        icon: TvIcon,
        description:
            "The compression tool does not need any special system in order to compress your PDF files. The app is browser based and works under all operating systems.",
    },
    {
        id: "f267c510-4651-4931-9044-a8f3dc2aab71",
        title: "No installation required",
        icon: CloudQueueIcon,
        description:
            "You do not need to download and install any software. PDF files are compressed in the cloud on our servers. The app does not consume your system resources.",
    },
    {
        id: "febf2b7f-2a06-44ac-9fad-498f8037a060",
        title: "Secure online compression",
        icon: HttpsOutlinedIcon,
        description:
            "The compression tool does not keep your files longer than necessary on our server. Your files and results will be deleted from our server after a short period of time.",
    },
];
