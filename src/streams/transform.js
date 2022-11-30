import {Transform} from 'node:stream'
import {pipeline} from 'node:stream/promises';

const transform = async () => {
    const reverseTransformer = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, [...chunk.toString()].reverse().join(''));
        }
    });

    await pipeline(process.stdin, reverseTransformer, process.stdout)
};

await transform();