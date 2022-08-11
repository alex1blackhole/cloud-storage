import {GET_FILES} from "../../constants/api";
import {api} from "../api";

/**
 *
 * api for creating new directory
 */

async function apiCreateDir(dirId: null | string = '', name: string) {
    return await api.post(GET_FILES, {
        name,
        type: 'dir',
        parent: dirId,
    });
}


export default apiCreateDir;
