import {describe, it} from 'mocha';
import {expect} from 'chai';
import {readSize} from '../../src/app/InputProcessing';


describe('calculateDistance', function () {
    it('should parse same numbers', function () {
        expect(readSize('1 1'))
            .to.be.deep.equal([1, 1]);
    });

    it('should parse different numbers', function () {
        expect(readSize('1 121'))
            .to.be.deep.equal([1, 121]);
    });
});