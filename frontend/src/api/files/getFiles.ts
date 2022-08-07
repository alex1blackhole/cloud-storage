import axios, {AxiosResponse} from "axios";
import {GET_FILES} from "../../constants/api";

/**
 *
 * get user files
 *
 * @param dirId
 */
async function apiGetFiles(dirId: string): Promise<AxiosResponse<any, any> | undefined> {
    try {
        return  await axios.get(`${GET_FILES}${dirId ? `?parent=${dirId}` : ''}`, {
          headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        });

    } catch (e) {
        console.log('apiLogin error', e)
        // @ts-ignore
        return e
    }
}


export default apiGetFiles;
