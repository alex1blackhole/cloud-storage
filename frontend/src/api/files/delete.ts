import {DELETE_FILE} from "../../constants/api";
import {api} from "../api";
import {IFile} from "../../ui/file/FileIU";

/**
 *
 * delete file or directory from bd
 *
 * @param file
 */
async function apiDeleteFile(file: IFile) {
    await api.delete(DELETE_FILE + '?id=' + file._id)
}

export default apiDeleteFile;
