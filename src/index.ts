import {calculateDistance} from './app/calculateDistance';
import {readBitmapsFromInput} from './app/InputProcessing';
import {printResult} from './io/printResult';
import {readInput} from './io/readInput';

readInput()
    .then((input) => {
        readBitmapsFromInput(input)
            .map(calculateDistance)
            .forEach(printResult);
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
