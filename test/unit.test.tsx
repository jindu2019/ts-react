// let unit = require('../src/unit');
import { sum } from '../src/unit'
describe("Simple expression tests", () => {
    it('1+1=2', () => {
        expect(sum(1, 1)).toBe(2);
    });

    it('1+2=3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});