import axios, {AxiosResponse} from "axios";
import {AUTH} from "../../constants/api";


/**
 * user auth request
 *
 */


async function apiAuth(): Promise<AxiosResponse<any, any> | undefined> {
    try {
        return await axios.get(AUTH,{
            headers: {
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        });
    } catch (e) {
        console.log('apiLogin error', e)
        // @ts-ignore
        return e
    }
}

export default apiAuth;
