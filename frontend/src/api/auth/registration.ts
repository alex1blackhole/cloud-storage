import axios, {AxiosResponse} from "axios";
import {AUTH_REGISTRATION} from "../../constants/api";


/**
 *
 * user registration request
 *
 * @param email
 * @param password
 * @param firstName
 * @param lastName
 */
async function apiRegistration(
    email: string,
    password: string,
    firstName: string,
    lastName: string
): Promise<AxiosResponse<any, any> | undefined> {
    try {
        return await axios.post(AUTH_REGISTRATION, {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
        });

    } catch (e) {
        console.log('UserRegistration error', e)
        // @ts-ignore
        return e

    }
}


export default apiRegistration;
