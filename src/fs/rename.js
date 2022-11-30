import {copyFile, constants} from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const sourceTarget = `${__dirname}/files/wrongFilename.txt`
const destTarget = `${__dirname}/files/properFilename.md`

const rename = async () => {
    try {
        await copyFile(sourceTarget, destTarget, constants.COPYFILE_EXCL)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await rename();