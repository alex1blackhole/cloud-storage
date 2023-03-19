/**
 Checks whether a value is an array.
 @param value - The value to check.
 @returns Returns true if the value is an array, else false.
 **/

export function isArray(value: any): boolean {
    return Array.isArray(value) || value instanceof ArrayBuffer
        || value instanceof SharedArrayBuffer || ArrayBuffer.isView(value);
}

/**
 Checks whether a value is an Object.
 @param value - The value to check.
 @returns Returns true if the value is an Object, else false.
 **/
export function isObject(value: unknown): boolean {
    return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 Checks whether a value is a String.
 @param value - The value to check.
 @returns Returns true if the value is a String, else false.
 **/
export function isString(value: unknown): boolean {
    return Object.prototype.toString.call(value) === '[object String]';
}

/**
 Checks whether a value is a Number.
 @param value - The value to check.
 @returns Returns true if the value is a Number, else false.
 **/
export function isNumber(value: unknown): boolean {
    return Object.prototype.toString.call(value) === '[object Number]';
}
