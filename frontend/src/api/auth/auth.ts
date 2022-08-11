import {AUTH} from "../../constants/api";
import {api} from "../api";

/**
 * user auth request
 *
 */

async function apiAuth()  {
    return await api.get(AUTH);
}

export default apiAuth;
