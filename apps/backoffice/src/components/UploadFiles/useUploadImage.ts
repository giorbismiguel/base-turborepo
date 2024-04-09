import FilesService, {ImageUpload} from "components/UploadFiles/files.services";
import {useMutation} from "react-query";
import {ChangeEvent, useCallback} from "react";
import {MAX_FILE_SIZE_BYTES, validationFile} from "components/UploadFiles/files.utils";

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
            // toast.error(t(message));
            alert(message)
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