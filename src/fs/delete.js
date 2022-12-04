import {rm} from 'node:fs/promises';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const targetFile = `${__dirname}/files/fileToRemove.txt`

const remove = async () => {
    try {
        await rm(targetFile)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await remove();