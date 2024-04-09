import {ApiClientService, EntityApiService} from "@dfl/react-security";
import {ImageData} from "interfaces/images";

export type ImageUpload = {
    thumb: string, image: string
}

export type UploadMediaType = {
    file: File | null;
    maxFileSize?: number | undefined;
    fileTypes: Array<string>;
};

class FilesService extends EntityApiService<any> {
    upload = (files: File | undefined): Promise<ImageData> => {
        const formData = new FormData();
        formData.append("files", files as Blob);

        if (files) {
            return this.handleResponse(
                ApiClientService.post(this.getPath("/image"), formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }),
            );
        }

        return Promise.reject({
            message: "You must need a userId and a files",
        });
    };
}

export default new FilesService("/ms-auth/api/files");
