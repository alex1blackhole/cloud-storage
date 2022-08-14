export function isArray(value: unknown): boolean {
    return Object.prototype.toString.call(value) === '[object Array]';
}

export function isObject(value: unknown): boolean {
    return Object.prototype.toString.call(value) === '[object Object]';
}

export function isString(value: unknown): boolean {
    return Object.prototype.toString.call(value) === '[object String]';
}

export function isNumber(value: unknown): boolean {
    return Object.prototype.toString.call(value) === '[object Number]';
}
