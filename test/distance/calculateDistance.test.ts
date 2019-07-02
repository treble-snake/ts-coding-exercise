import {describe, it} from 'mocha';
import {expect} from 'chai';
import {calculateDistance} from '../../src/app/calculateDistance';

describe('calculateDistance', function () {
    it('should return only zeroes if all cells are white', function () {
        expect(calculateDistance([
            ['1', '1'],
            ['1', '1']
        ]))
            .to.be.deep.equal([
            [0, 0],
            [0, 0]
        ]);
    });

    it('should calculate distance with one row', function () {
        expect(calculateDistance([
            ['1', '0', '0']
        ]))
            .to.be.deep.equal([
            [0, 1, 2]
        ]);
    });

    it('should calculate distance with one white pixel', function () {
        expect(calculateDistance([
            ['1', '0'],
            ['0', '0']
        ]))
            .to.be.deep.equal([
            [0, 1],
            [1, 2]
        ]);
    });

    it('should work on the given example', function () {
        expect(calculateDistance(
            [
                ['0', '0', '0', '1'],
                ['0', '0', '1', '1'],
                ['0', '1', '1', '0']
            ]))
            .to.be.deep.equal([
            [3, 2, 1, 0],
            [2, 1, 0, 0],
            [1, 0, 0, 1]
        ]);
    });

});