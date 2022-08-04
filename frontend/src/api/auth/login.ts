import axios, {AxiosResponse} from "axios";
import {AUTH_LOGIN} from "../../constants/api";


/**
 *
 * user login request
 *
 * @param email
 * @param password
 */
async function apiLogin(email: string, password: string): Promise<AxiosResponse<any, any> | undefined> {
    try {
        return await axios.post(AUTH_LOGIN, {
            email: email,
            password: password,
        });
    } catch (e) {
        console.log('apiLogin error', e)
        // @ts-ignore
        return e
    }
}


export default apiLogin;
