import {describe, it} from 'mocha';
import {expect} from 'chai';
import {readTestCase} from '../../src/app/InputProcessing';

const lines = [
    '3',
    '2 2',
    '01',
    '10',
    '',
    '3 2',
    '111',
    '000',
    '101',
    '',
    '1 2',
    '01'
];

describe('calculateDistance', function () {
    it('should read 1st case', function () {
        expect(readTestCase(lines, 2, 2))
            .to.be.deep.equal([
                ['0', '1'],
                ['1', '0']
        ]);
    });

    it('should read middle case', function () {
        expect(readTestCase(lines, 6, 3))
            .to.be.deep.equal([
            ['1', '1', '1'],
            ['0', '0', '0'],
            ['1', '0', '1']
        ]);
    });


    it('should read last  case', function () {
        expect(readTestCase(lines, 11, 1))
            .to.be.deep.equal([
            ['0', '1']
        ]);
    });

});