import {dirname as __dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

module.exports.dirname = (targetPath, scriptPath) => {
    return `${__dirname(fileURLToPath(scriptPath))}/${targetPath}`
}

module.exports.moduleDirname = scriptPath => {
    return targetPath => `${__dirname(fileURLToPath(scriptPath))}/${targetPath}`
}

console.log(module)
