import { FileWithPreview } from "@/components/compress-box/compress-box";
import { useNotification } from "@/contexts/notification-context";
import { UploadFileResponse } from "@/types/response.dto";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
    fetchCheckStatus,
    fetchCompressFiles,
    fetchDownloadResults,
    fetchUploadFiles,
} from "../services/pdf-compress.service";

type useCompressPDFReturnType = {
    compressStatus: string;
    compressJobId: string | null;
    downloadUrl: string | undefined;
    isPendingUploadFiles: boolean;
    isPendingCompressFiles: boolean;
    fetchDownloadFiles: () => void;
    deleteUploadFiles: (index: number) => void;
    handleUploadFiles: (files: FileWithPreview[]) => Promise<void>;
    handleCompressFiles: (
        dpi: number,
        imageQuality: number,
        colorMode: "" | "grey"
    ) => Promise<void>;
};

export function useCompressPDF(): useCompressPDFReturnType {
    const { notificationSuccess, notificationError, notificationInfo } = useNotification();

    const [uploadFiles, setUploadFiles] = useState<UploadFileResponse[]>([]);
    const [compressJobId, setCompressJobId] = useState<string | null>(null);

    const { mutateAsync: mutateAsyncUploadFiles, isPending: isPendingUploadFiles } = useMutation({
        mutationFn: fetchUploadFiles,
        onSuccess: ({ data }) => {
            setUploadFiles(data);
        },
    });

    const { mutateAsync: mutateAsyncCompressFiles, isPending: isPendingCompressFiles } =
        useMutation({
            mutationFn: fetchCompressFiles,
            onSuccess: ({ data }) => {
                setCompressJobId(data.jobId);
            },
        });

    const { data: compressStatus } = useQuery({
        queryKey: ["compress-status", compressJobId],
        queryFn: async () => {
            const res = await fetchCheckStatus(compressJobId!);
            return res.data.status;
        },
        refetchInterval: (data) => {
            const isFinish = data?.state.data !== "done";
            return isFinish ? 1000 : false;
        },
        initialData: "pending",
        enabled: !!compressJobId,
    });

    const { data: downloadUrl, refetch: fetchDownloadFiles } = useQuery({
        queryKey: ["download-pdf", compressJobId],
        queryFn: async () => {
            const res = await fetchDownloadResults(compressJobId!);
            const blob = new Blob([res.data], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            return url;
        },
        enabled: !!compressJobId && compressStatus === "done",
    });

    const handleUploadFiles = async (files: FileWithPreview[]): Promise<void> => {
        try {
            const formData = new FormData();
            files.forEach(({ file }, index) => {
                formData.append(`file${index}`, file);
            });
            notificationInfo("Uploading...");
            await mutateAsyncUploadFiles(formData);
            notificationSuccess("Upload file successfully");
        } catch (error) {
            notificationError("Failed to upload file, please try again");
        }
    };

    const handleCompressFiles = async (
        dpi: number,
        imageQuality: number,
        colorMode: "" | "grey"
    ): Promise<void> => {
        try {
            const body = { files: uploadFiles, mode: "normal", dpi, imageQuality, colorMode };
            notificationInfo("Compressing...");
            await mutateAsyncCompressFiles(body);
            notificationSuccess("Compress File successfully");
        } catch (error) {
            notificationError("Failed to compress file file, please try again");
        }
    };

    const deleteUploadFiles = (index: number): void => {
        setUploadFiles((prevUploadFiles) => {
            return prevUploadFiles.filter((_, i) => i !== index);
        });
    };

    return {
        compressStatus,
        compressJobId,
        downloadUrl,
        handleUploadFiles,
        handleCompressFiles,
        fetchDownloadFiles,
        deleteUploadFiles,
        isPendingUploadFiles,
        isPendingCompressFiles,
    };
}
