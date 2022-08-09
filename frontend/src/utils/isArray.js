export function isArray(array) {
    return Object.prototype.toString.call(array) === '[object Array]';
}

export function isObject(array) {
    return Object.prototype.toString.call(array) === '[object Object]';
}

