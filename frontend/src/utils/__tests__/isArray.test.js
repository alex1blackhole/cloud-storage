import {definitions, isObject, isString} from "../definitions";

describe('definitions util func', () => {

    test('пустой массив', () => {
        expect(definitions([])).toBe(true);
    });

    test('массив цифр', () => {
        expect(definitions([1,3,2])).toBe(true);
    });

    test('массив объект', () => {
        expect(definitions([{}])).toBe(true);
    });

    test('вызов с числом', () => {
        expect(definitions(1)).toBe(false);
    });

    test('вызов с объектом', () => {
        expect(definitions({})).toBe(false);
    });

    test('вызов со строчкой', () => {
        expect(definitions('string')).toBe(false);
    });

    test('вызов с false', () => {
        expect(definitions(false)).toBe(false);
    });

    test('вызов с true', () => {
        expect(definitions(true)).toBe(false);
    });

    test('вызов с null', () => {
        expect(definitions(null)).toBe(false);
    });

})

describe('isObject util func', () => {

    test('correct way', () => {
        expect(isObject({})).toBe(true);
    });


    test('incorrect way', () => {
        expect(isObject([])).toBe(false);
    });

})

describe('isString util func', () => {

    test('correct way', () => {
        expect(isString('str')).toBe(true);
    });


    test('incorrect way', () => {
        expect(isString(1)).toBe(false);
    });

})

