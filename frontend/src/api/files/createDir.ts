import axios, {AxiosResponse} from "axios";
import {GET_FILES} from "../../constants/api";

/**
 *
 * api for creating new directory
 */

async function apiCreateDir(dirId: null | string = '', name: string): Promise<AxiosResponse<any, any> | undefined> {
    try {
        return await axios.post(GET_FILES, {
            name,
            type: 'dir',
            parent: dirId,
        }, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        });

    } catch (e) {
        console.log('apiLogin error', e)
        // @ts-ignore
        return e
    }
}


export default apiCreateDir;
