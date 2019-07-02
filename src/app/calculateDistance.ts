export type Bitmap = string[][];
type Position = [number, number];

const isWhite = (item: string): boolean => item === '1';

const getDistanceMapper =
    ([i1, j1]: Position) => ([i2, j2]: Position): number =>
        Math.abs(i1 - i2) + Math.abs(j1 - j2);

export const calculateDistance = (input: Bitmap): number[][] => {

    const whites: Position[] = [];
    const blacks: Position[] = [];
    const result: number[][] = [];

    input.forEach((row, i) => {
        result[i] = [];

        row.forEach((item, j) => {
            result[i][j] = 0;
            isWhite(item) ?
                whites.push([i, j]) :
                blacks.push([i, j]);
        });
    });

    blacks.forEach(([i, j]) => {
        const distanceMapper = getDistanceMapper([i, j]);
        const distances = whites.map(distanceMapper);
        result[i][j] = Math.min(...distances);
    });

    return result;
};
