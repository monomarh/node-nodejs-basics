import {cp} from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const sourceTarget = `${__dirname}/files`
const destTarget = `${__dirname}/files_copy`

const copy = async () => {
    try {
        await cp(sourceTarget, destTarget, {force: false, errorOnExist: true, recursive: true})
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

copy();