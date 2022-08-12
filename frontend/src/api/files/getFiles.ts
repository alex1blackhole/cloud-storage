import {GET_FILES} from "../../constants/api";
import {api} from "../api";

/**
 *
 * get user files
 *
 * @param dirId
 */
async function apiGetFiles(dirId: null | string) {
    return await api.get(`${GET_FILES}${dirId ? `?parent=${dirId}` : ''}`);
}


export default apiGetFiles;
