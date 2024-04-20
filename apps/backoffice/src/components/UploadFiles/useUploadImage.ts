import type {ImageUpload} from "components/UploadFiles/files.services";
import FilesService from "components/UploadFiles/files.services";
import {useMutation} from "react-query";
import type {ChangeEvent} from "react";
import { useCallback} from "react";
import {MAX_FILE_SIZE_BYTES, validationFile} from "components/UploadFiles/files.utils";
import { t } from "i18next";
import toast from "react-hot-toast";

export const useUploadImage = (fileTypes?: string[]) => {
    const {mutate, ...mutation} = useMutation<ImageUpload, any, File>(FilesService.upload, {})
    const upload = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;

        const message = validationFile({
            file,
            maxFileSize: MAX_FILE_SIZE_BYTES,
            fileTypes: fileTypes || ['image'],
        });

        if (message) {
            toast.error(t(message));
            return;
        }

        if (file) {
            mutate(file);
        }
    }, [mutate, fileTypes]);

    return {
        upload,
        ...mutation
    }

}