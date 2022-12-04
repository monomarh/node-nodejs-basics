import {promisify} from 'node:util';
import {createGzip} from 'node:zlib';
import {pipeline} from 'node:stream';
import {
    createReadStream,
    createWriteStream
} from 'node:fs';

import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const targetFile = `${__dirname}/files/fileToCompress.txt`
const targetArchive = `${__dirname}/files/archive.gz`

const compress = async () => {
    const pipe = promisify(pipeline);
    const gzip = createGzip();
    const source = createReadStream(targetFile);
    const destination = createWriteStream(targetArchive);

    try {
        await pipe(source, gzip, destination);
    } catch (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
};

await compress();