export const readInput = (): Promise<string> => {
    return new Promise<string>((resolve) => {
        process.stdin.resume();
        process.stdin.setEncoding('utf-8');

        const inputChunks: string[] = [];

        process.stdin.on('data', (chunk) => {
            inputChunks.push(chunk);
        });

        process.stdin.on('end', () => {
            const input = inputChunks.join('');
            resolve(input);
        });
    });
};
