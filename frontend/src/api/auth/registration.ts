import {AUTH_REGISTRATION} from "../../constants/api";
import {api} from "../api";

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
) {
    return await api.post(AUTH_REGISTRATION, {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
    });

}


export default apiRegistration;
