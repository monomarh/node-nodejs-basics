import {writeFile} from 'node:fs/promises';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const targetFile = `${__dirname}/files/fresh.txt`

const create = async () => {
    try {
        await writeFile(targetFile, 'I am fresh and young', {flag: 'ax'})
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await create();