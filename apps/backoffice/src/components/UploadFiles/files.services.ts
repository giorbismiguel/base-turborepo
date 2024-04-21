import {ApiClientService, EntityApiService} from "security";
import type {ImageData} from "interfaces/images";

export interface ImageUpload {
    thumb: string, image: string
}

export interface UploadMediaType {
    file: File | null;
    maxFileSize?: number | undefined;
    fileTypes: string[];
}

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

         
        return Promise.reject(
          new Error('"You must need a userId and a files"'),
        );
    };
}

export default new FilesService("/ms-auth/api/files");
