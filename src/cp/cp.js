import {spawn} from 'node:child_process';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {pipeline} from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url))
const targetFile = `${__dirname}/files/script.js`

const spawnChildProcess = async (args) => {
    const script = spawn('node', [targetFile, ...args]);

    script.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    script.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    script.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

    try {
        await pipeline(process.stdin, script.stdin)
    } catch (err) {
        console.log(err)
    }
};

spawnChildProcess(['arg1', 'Hello', 'arg2', 'world', 'arg3', '!']);