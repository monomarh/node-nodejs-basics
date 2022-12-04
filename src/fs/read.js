import {readFile} from 'node:fs/promises';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const targetFile = `${__dirname}/files/fileToRead.txt`

const read = async () => {
    try {
        const contents = await readFile(targetFile, {encoding: 'utf8'});

        console.log(contents);
    } catch (err) {
        console.error(err)
        throw new Error('FS operation failed')
    }
};

await read();