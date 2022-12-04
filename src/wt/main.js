import {cpus} from 'node:os'
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {Worker} from 'node:worker_threads'

const __dirname = dirname(fileURLToPath(import.meta.url))
const workerFile = `${__dirname}/worker.js`

const worker = (value) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerFile, {
            workerData: value
        });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        });
    })
}

const performCalculations = async () => {
    let workersResults = [];

    for (let i = 0; i < cpus().length; i++) {
        try {
            let workerResult = await worker(10 + i)

            workersResults.push(workerResult)
        } catch (err) {
            console.log(err)
        }
    }

    console.log(workersResults)
};

await performCalculations();