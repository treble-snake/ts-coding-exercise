import {describe, it} from 'mocha';
import {expect} from 'chai';
import {readBitmapsFromInput} from '../../src/app/InputProcessing';

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
].join('\n');

describe('calculateDistance', function () {
    it('should read 1st case', function () {
        expect(readBitmapsFromInput(lines))
            .to.be.deep.equal([
            [
                ['0', '1'],
                ['1', '0']
            ],
            [
                ['1', '1', '1'],
                ['0', '0', '0'],
                ['1', '0', '1']
            ],
            [
                ['0', '1']
            ]
        ]);
    });



});