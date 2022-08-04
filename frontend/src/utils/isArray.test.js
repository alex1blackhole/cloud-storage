import {isArray} from "./isArray";

describe('isArray util func', () => {

    test('пустой массив', () => {
        expect(isArray([])).toBe(true);
    });

    test('массив цифр', () => {
        expect(isArray([1,3,2])).toBe(true);
    });

    test('массив объект', () => {
        expect(isArray([{}])).toBe(true);
    });

    test('вызов с числом', () => {
        expect(isArray(1)).toBe(false);
    });

    test('вызов с объектом', () => {
        expect(isArray({})).toBe(false);
    });

    test('вызов со строчкой', () => {
        expect(isArray('string')).toBe(false);
    });

    test('вызов с false', () => {
        expect(isArray(false)).toBe(false);
    });

    test('вызов с true', () => {
        expect(isArray(true)).toBe(false);
    });

    test('вызов с null', () => {
        expect(isArray(null)).toBe(false);
    });

})
