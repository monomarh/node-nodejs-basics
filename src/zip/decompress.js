import {promisify} from 'node:util';
import {createUnzip} from 'node:zlib';
import {pipeline} from 'node:stream';
import {
    createReadStream,
    createWriteStream
} from 'node:fs';

import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const targetArchive = `${__dirname}/files/archive.gz`
const targetFile = `${__dirname}/files/fileToCompress.txt`

const decompress = async () => {
    const pipe = promisify(pipeline);
    const unzip = createUnzip()
    const source = createReadStream(targetArchive);
    const destination = createWriteStream(targetFile);

    try {
        await pipe(source, unzip, destination);
    } catch (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
};

await decompress();