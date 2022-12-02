import { sort } from './mergeSort';

describe('mergeSort', () => {
    it('should be sorted', () => {
        expect(sort([4, 7, 2, 3])).toEqual([2, 3, 4, 7]);
    });
    it('should be sorted w/ duplicates', () => {
        expect(sort([4, 7, 2, 3, 4])).toEqual([2, 3, 4, 4, 7]);
    })
})