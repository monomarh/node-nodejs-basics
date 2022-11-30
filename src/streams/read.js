import {createReadStream} from 'node:fs';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {pipeline} from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url))
const targetFile = `${__dirname}/files/fileToRead.txt`

const read = async () => {
    const fileStream = createReadStream(targetFile);

    await pipeline(fileStream, process.stdin);
};

await read();