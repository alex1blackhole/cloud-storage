import type * as Utils from "../definitions"

const {isArray, isObject, isString, isNumber} = jest.requireActual<typeof Utils>("../definitions")

describe('isArray', () => {
    it('returns true when passed an array', () => {
        expect(isArray([])).toBe(true);
        expect(isArray([1, 2, 3])).toBe(true);
        expect(isArray(new Array())).toBe(true);
    });

    it('returns false when passed a non-array value', () => {
        expect(isArray('')).toBe(false);
        expect(isArray(0)).toBe(false);
        expect(isArray({})).toBe(false);
    });

    it('returns true when passed a typed array', () => {
        expect(isArray(new Int8Array())).toBe(true);
        expect(isArray(new Uint8Array())).toBe(true);
        expect(isArray(new Uint8ClampedArray())).toBe(true);
        expect(isArray(new Int16Array())).toBe(true);
        expect(isArray(new Uint16Array())).toBe(true);
        expect(isArray(new Int32Array())).toBe(true);
        expect(isArray(new Uint32Array())).toBe(true);
        expect(isArray(new Float32Array())).toBe(true);
        expect(isArray(new Float64Array())).toBe(true);
        expect(isArray(new BigInt64Array())).toBe(true);
        expect(isArray(new BigUint64Array())).toBe(true);
    });
});

describe('isObject', () => {
    it('should return true for an object', () => {
        expect(isObject({})).toBe(true);
        expect(isObject({ key: 'value' })).toBe(true);
        expect(isObject(new Object())).toBe(true);
    });

    it('should return false for non-objects', () => {
        expect(isObject('')).toBe(false);
        expect(isObject(0)).toBe(false);
        expect(isObject([])).toBe(false);
        expect(isObject(null)).toBe(false);
        expect(isObject(undefined)).toBe(false);
    });
});

describe('isString', () => {
    it('should return true for a string', () => {
        expect(isString('')).toBe(true);
        expect(isString('hello')).toBe(true);
        expect(isString(new String())).toBe(true);
    });

    it('should return false for non-strings', () => {
        expect(isString(0)).toBe(false);
        expect(isString([])).toBe(false);
        expect(isString({})).toBe(false);
        expect(isString(null)).toBe(false);
        expect(isString(undefined)).toBe(false);
    });
});

describe('isNumber', () => {
    it('should return true for a number', () => {
        expect(isNumber(0)).toBe(true);
        expect(isNumber(123)).toBe(true);
        expect(isNumber(new Number())).toBe(true);
    });

    it('should return false for non-numbers', () => {
        expect(isNumber('')).toBe(false);
        expect(isNumber([])).toBe(false);
        expect(isNumber({})).toBe(false);
        expect(isNumber(null)).toBe(false);
        expect(isNumber(undefined)).toBe(false);
    });
});
