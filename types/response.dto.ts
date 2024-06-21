export type UploadFileResponse = {
    ctime: string;
    file: string;
    host: string;
    name: string;
    size: number;
};

export type CompressFileResponse = {
    jobId: string;
};

type JobEntryKey = `${number}.${"in" | "out"}.${"file" | "name" | "size"}` | `${number}.state`;

type JobEntry = {
    [key in JobEntryKey]?: string;
} & {
    charset: string;
    "client.ip": string;
    command: string;
    count: string;
    creationTime: string;
    lang: string;
    "out.file": string;
    "out.name": string;
    "out.size": string;
    "param.dpi": string;
    "param.mode": string;
    "processing.endTime": string;
    "processing.heartbeat": string;
    "processing.startTime": string;
    "processing.time": string;
    referrer: string;
    resultType: string;
    service: string;
    state: string;
};

export type CheckStatusResponse = {
    jobId: string;
    status: "done" | "pending" | "failed";
    job: JobEntry;
};
