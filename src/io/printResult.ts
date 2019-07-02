export const printResult = (result: number[][]): void => {
    process.stdout.write(
        result.map((row) => row.join(' ')).join('\n'));
    process.stdout.write('\n\n');
};
