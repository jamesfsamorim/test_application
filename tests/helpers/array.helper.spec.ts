import { getFlatArray } from "../../src/helpers/array.helper";

describe('getFlatArray', () => {
    it('should be able to flatten a nested array', () => {
        const nestedArray = [ 1, [ 2, [ 3 ] ], 4 ]
        const flatArray = getFlatArray(nestedArray)

        expect(flatArray).toEqual([1, 2, 3, 4])
    });

    it('should be able to flatten a nested array with object and string', () => {
        const nestedArray = [ 1, [ 2, [ 3, 'mock', 5 ], {test: 1} ], 4 ]
        const flatArray = getFlatArray(nestedArray)

        expect(flatArray).toEqual([1, 2, 3, 'mock', 5, {test: 1}, 4])
    });

    it('should be able return the value in array when no passing an array to flat', () => {
        const number = 7
        const flatArray = getFlatArray(number)

        expect(flatArray).toEqual([7])
    });
})