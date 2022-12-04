import {createWriteStream} from 'node:fs';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {pipeline} from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url))
const targetFile = `${__dirname}/files/fileToWrite.txt`

const write = async () => {
    const fileStream = createWriteStream(targetFile);

    await pipeline(process.stdin, fileStream);
};

await write();