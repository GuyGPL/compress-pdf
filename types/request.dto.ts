import { UploadFileResponse } from "./response.dto";

export type CompressFileBodyRequest = {
    files: UploadFileResponse[];
    dpi: number;
    imageQuality: number;
    mode: string;
    colorMode: "" | "grey";
};
