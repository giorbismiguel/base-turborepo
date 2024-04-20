import type {UploadMediaType} from "components/UploadFiles/files.services";

export function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export const MAX_FILE_SIZE_BYTES = 500000000;

export const validationFile = ({
                                   file,
                                   maxFileSize = MAX_FILE_SIZE_BYTES,
                                   fileTypes,
                               }: UploadMediaType) => {
    if (!file) {
        return;
    }

    const [type] = file.type.split("/");
    if (!fileTypes.includes(type)) {
        return "fileNotAllowedType";
    }

    if (file.size > maxFileSize) {
        return "fileTooLarge";
    }
};
