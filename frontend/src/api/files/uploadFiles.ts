import {UPLOAD_FILES} from "../../constants/api";
import {api} from "../api";
import {FileStorage} from "../../mobx/FileStorage";

/**
 *
 * api for creating uploading file or files on server
 * we should pass dirId if we want upload file to exist directory
 */

async function apiUploadFiles(dirId: null | string = '', file: any) {

    const data = new FormData()

    data.append('file', file)

    if (dirId) data.append('parent', dirId)

    return await api.post(UPLOAD_FILES, data,{
        onUploadProgress: progressEvent => {
            const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
            if (totalLength) {
                let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                FileStorage.updateFileUploadingProgress(progress)
            }
        }
    });
}


export default apiUploadFiles;
