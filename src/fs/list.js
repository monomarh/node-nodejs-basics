import {readdir} from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const targetDir = `${__dirname}/files/`

const list = async () => {
    try {
        const files = await readdir(targetDir);

        for (const file of files) {
            console.log(file);
        }
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await list();