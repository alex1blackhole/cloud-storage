export function isArray(array) {
    return Object.prototype.toString.call(array) === '[object Array]';
}
