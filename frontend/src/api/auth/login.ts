import {AUTH_LOGIN} from "../../constants/api";
import {api} from "../api";


/**
 *
 * user login request
 *
 * @param email
 * @param password
 */
async function apiLogin(email: string, password: string) {
    return await api.post(AUTH_LOGIN, {
        email: email,
        password: password,
    });
}


export default apiLogin;
