import {isString} from "./definitions";

function getShortDate(date: string) {
    if (isString(date)) return date.slice(0, 10)

    throw new Error('getShortDate type error')

}

export default getShortDate;
