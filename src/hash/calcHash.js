import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto'
import {readFile} from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url))
const targetFile = `${__dirname}/files/fileToCalculateHashFor.txt`

const calculateHash = async () => {
    let content = ''
    const hash = createHash('sha256');

    try {
        content = await readFile(targetFile, {encoding: 'utf8'});
    } catch (err) {
        throw new Error('FS operation failed')
    }

    console.log(`${await hash.update(content).digest('hex')}`);
};

await calculateHash();