"use client";
import { CompressFileBodyRequest } from "@/types/request.dto";
import {
    CheckStatusResponse,
    CompressFileResponse,
    UploadFileResponse,
} from "@/types/response.dto";
import axios, { AxiosResponse } from "axios";

axios.defaults.withCredentials = true;

export const fetchUploadFiles = async (
    body: FormData
): Promise<AxiosResponse<UploadFileResponse[]>> => {
    return await axios.post("https://filetools13.pdf24.org/client.php", body, {
        params: { action: "upload" },
    });
};

export const fetchCompressFiles = async (
    body: CompressFileBodyRequest
): Promise<AxiosResponse<CompressFileResponse>> => {
    return await axios.post("https://filetools13.pdf24.org/client.php", body, {
        params: { action: "compressPdf" },
    });
};

export const fetchCheckStatus = async (
    jobId: string
): Promise<AxiosResponse<CheckStatusResponse>> => {
    return await axios.get("https://filetools13.pdf24.org/client.php", {
        params: { action: "getStatus", jobId },
    });
};

export const fetchDownloadResults = async (jobId: string): Promise<AxiosResponse<Blob>> => {
    return await axios.get("https://filetools13.pdf24.org/client.php?action=upload", {
        params: { action: "downloadJobResult", mode: "download", jobId },
        responseType: "blob",
    });
};
