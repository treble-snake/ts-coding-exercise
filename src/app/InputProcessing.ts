import {Bitmap} from './calculateDistance';

export const readSize = (str: string): [number, number] => {
    const numbers = str.split(' ').map((it) => Number.parseInt(it, 10));
    return [numbers[0], numbers[1]];
};

export const readTestCase = (lines: string[], i: number, m: number): Bitmap => {
    const testCase: Bitmap = [];
    for (let j = i; j < i + m; j++) {
        testCase.push(lines[j].split(''));
    }
    return testCase;
};

export const readBitmapsFromInput = (input: string): Bitmap[] => {
    const lines = input.split('\n');
    const len = lines.length;
    let i = 1;
    const result = [];

    do {
        const [m] = readSize(lines[i]);
        result.push(readTestCase(lines, i + 1, m));
        i += m + 2;
    } while (i < len);

    return result;
};
